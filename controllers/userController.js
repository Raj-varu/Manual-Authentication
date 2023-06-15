const User = require('../models/user');

module.exports.profile = function(req,res){
if(req.cookies.user_id){
    User.findById(req.cookies.user_id).then(function(user){
        if(user){
            return res.render('profile',{
                user :user
            })
        }
       return res.redirect('/user/sign_in');
    })
}else{
    return res.redirect('/user/sign_in');
}
};

//Sign in Page 
module.exports.Sign_in = function(req,res){
    res.render('Sign-in',{
        title:'Sign-in'
    });
}

//Sign up Page
module.exports.Sign_up = function(req,res){
    res.render('Sign-up',{
        title:'Sign-up'
    });
}

//Creating new user
module.exports.create = function(req,res){
    // console.log(req.body);
    // res.redirect('/');
  
    if(req.body.password != req.body.cnfpassword){
      return  res.redirect('/user/sign_up');
    }
    User.findOne({email : req.body.email}).then(function(user){
        if(user){
        console.log('User didnt exisit');
        return res.redirect('/user/sign_up');
        }
        User.create(req.body);
        return res.redirect('/user/sign_in')
    })

};


module.exports.create_session = function(req,res){
    User.findOne({email : req.body.email}).then(function(user){
        if(!user){
          return  res.redirect('/user/sign_in');
        }
        if(user.password != req.body.password){
           return res.redirect('/user/sign_in');
        }else{    res.cookie('user_id',user.id);
        return  res.redirect('/user/profile')}
    
    })
}