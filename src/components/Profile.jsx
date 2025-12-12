function Profile() {
    return (
        <div>
            <h1>Profile Card Challange</h1>
            <ProfileCard
                name="John Doe"
                age={30}
                greeting={
                    <div>
                        <strong>Hello, Welcome Jhon Doe.</strong>
                    </div>
                }
            >
                <p>Hobbies : Reading, Travelling</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Jane Smith"
                age={25}
                greeting={
                    <div>
                        <strong>Hello, Welcome Jane Smith.</strong>
                    </div>
                }
            >
                <p>Hobbies : Gaming, Music</p>
                <button>Contact</button>
            </ProfileCard>
        </div>
    );
}

export default Profile;

function ProfileCard({name, age, greeting, children}){
    // const {name, age, greeting, children} = props;
    return(
        <>
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}