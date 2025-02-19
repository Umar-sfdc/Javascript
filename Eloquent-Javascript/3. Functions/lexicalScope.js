// Lexical Scope ?


function outer()
{
    let username = "MadHost"            // scope of username is in outer function only.

    function inner()
    {
        let name = "Umar-sfdc"
        console.log(username);          // MadHost
        console.log("inner function name : ", name);

        function innerChild()
        {
            console.log("Grand parent username : ", username);
            console.log("parent name : ", name);
        }

        innerChild();
    }

    function innerTwo()
    {
        console.log(username);          // MadHost
        // console.log("inner function name : ", name);           ERROR : childs functions can't share the bindings.
    }

    inner();
    innerTwo();

}

// console.log(username);      ERROR : username is not exist.

outer();

/* 

    Lexical Scope ?

    - The parent functions bindings can be used by child functions.
    - One parent function can have multiple childs, But each child can't shared the bindigs.
    - Only the parent function bindings can be used for multiple child functions.
    - Grand parenting or nested functions can also used bindings.
    - Child function can use parent bindings, But parent can't used child Bindings.
    - This is knows as Lexical Scope.


*/
