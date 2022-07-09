const LocalStrategy = require ("passport-local").Strategy;
const{ pool } =require("./connection-db");

function initialize(passport){
    const authenticationUSer = (email, password) => {
        pool.query(
            `SELECT * FROM login WHERE email= $1`,
            [email],
            (err,result) => {
                if(err) {
                    throw err;
                }

                console.log(result.rows);
                if(result.rows.length > 0){
                    const user = result.rows[0];

                    
                }
            }
        );
    }

    passport.use(
        new LocalStrategy(
            {
                usarnameField: "email",
                pass
            }
        )
    )
}
