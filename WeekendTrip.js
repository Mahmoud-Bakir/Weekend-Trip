var sub = document.getElementById("submit")
    console.log(sub)
    sub.addEventListener("click",add)
    var credentials = `{"first":"","last":"","age":0,"nickname":"","email":"","password":""

    }
    `;
    var user = JSON.parse(user);
    console.log(user)

    function add(){
        let fname = document.getElementById("fname").value;
        console.log(fname)
        user.first=fname
        let lname = document.getElementById("lname").value;
        console.log(lname)
        user.last=lname
        let age = document.getElementById("age").value;
        console.log(age)
        user.age=age
        let nickname = document.getElementById("nickname").value;
        console.log(nickname)
        user.nickname=nickname
        let email = document.getElementById("email").value;
        console.log(email)
        user.email=email
        let password = document.getElementById("password").value;
        console.log(password)
        test.password=password
        console.log(test)
    }

