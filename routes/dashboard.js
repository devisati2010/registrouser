module.exports = (app)=>{
    app.get('/dashboard',(req, res)=>{
        var id = req.query.id
        console.log(id)
        if(!id){
            res.redirect('/login')
        }else{
            var userexiste = await usuarios.findOne({_id:id})
            if(userexiste){
                res.render('dashboard.ejs',{login:userexiste})
            }else{
                res.redirect("/login")
            }
        }   
    })
}
