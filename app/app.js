
//using `` instead of "" allows the tags to be styled correctly when pasted into a variable
var homeContent = `<div class="home-page">
<div class="home-title">
    <p class="easter-title">Easter Sunday Extravaganza</p>
    <p class="easter-text">Come for a day full of family and fun!</p>
    <a href="" class="sign-up">SIGN UP NOW</a>
</div>
</div>`;
var aboutContent = `       <div class="about-page">
<header>
    <p class="all-about-us">All About Us</p>
</header>
<div class="about-body">
    <p class="about-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam,
        perferendis exercitationem
        est neque facere repudiandae officiis natus rerum, facilis ab libero atque placeat illo magni
        corporis explicabo adipisci veritatis.
        Ipsa, hic reprehenderit? Nesciunt nihil harum porro perspiciatis dicta corrupti, facere animi,
        debitis, accusamus iure quaerat ducimus tenetur dolore sit possimus quod? Quae possimus voluptate
        vitae. Eaque unde qui praesentium?
        Porro enim culpa temporibus quasi ad deleniti ab vel, explicabo, exercitationem quae tempora
        consectetur officia natus reprehenderit illum, libero vero. Temporibus nesciunt voluptatibus ducimus
        molestiae tempora harum aspernatur totam nulla!
        Est voluptate, labore suscipit officiis eos animi doloribus illum cupiditate quasi ea, neque vel,
        perferendis necessitatibus consequatur. Nesciunt ducimus ratione itaque deleniti nostrum vitae
        dolor. Delectus officiis fugiat excepturi eveniet?
        Soluta voluptatem ut, consequuntur eum possimus nihil accusantium ullam esse optio, quam similique
        vero aperiam quasi dolor rem enim autem dicta adipisci, a sed excepturi velit quidem. Tenetur,
        repudiandae veniam!</p>
    <p class="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, expedita
        molestias illo
        voluptatem magni nobis necessitatibus? Illum, ea. Iusto numquam temporibus laboriosam dolores
        sapiente quisquam cum dolore et libero sint.
        Fugiat eligendi cumque est animi non maxime quidem odit voluptatem saepe eaque eos commodi nam,
        neque alias culpa atque ipsum suscipit mollitia veritatis ea molestiae? Dolor qui amet tempora non.
        Neque inventore tenetur consequuntur, suscipit ipsum voluptatibus animi at beatae repudiandae
        debitis sed temporibus impedit dicta ut eaque praesentium possimus sequi porro placeat commodi
        sapiente ipsam? Cum voluptatum temporibus numquam?
        At excepturi laudantium molestiae nesciunt officiis cupiditate id. Mollitia temporibus inventore
        dolores aut voluptas ex atque, quisquam doloribus voluptatibus alias quis quasi adipisci eveniet
        reprehenderit odio expedita at ipsum sit.
        Consequatur error ipsum impedit quia maxime tempora ea! Ut, excepturi officia accusantium vel
        sapiente sed maiores reprehenderit voluptatibus repudiandae unde modi. Hic modi atque harum velit,
        laudantium quod reiciendis reprehenderit.</p>
</div>
</div>`;
var signupContent = `<div class="sign-up-page">
<h1>Sign Up Here!</h1>
<div class="sign-up-area">
    <div class="sign-up-image"></div>
    <div class="form">
        <form action="">
            <input class="input1" type="name" placeholder="Name...">
            <input class="input1" type="email" placeholder="Email...">
            <input class="input1" type="text" placeholder="Phone Number...">
            <textarea class="input2" name="" id="" cols="30" rows="10"
                placeholder="Ask us any questions you have about the event!"></textarea>
            <input class="submit" type="submit">
        </form>
    </div>
</div>
</div>`;
var eventsContent = ` <div class="events-page">
<header>
    <h1>Our Events</h1>
</header>
<div class="events-content">
    <h2>Check out some of our other holiday events!</h2>
    <div class="holidays">
        <div class="independence-image"></div>
        <div class="holiday-text">
            <p class="holiday-title">
                Independence Day
            </p>
            <p class="holiday-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nobis velit doloribus, illo quam aut esse blanditiis nihil minima voluptatibus temporibus
                odio, modi officiis possimus eum! Quo debitis rem deleniti.
                <br><br>
                Totam, officiis. Nisi, ipsam? Modi eveniet expedita magni placeat maxime facilis iste earum,
                fugiat laudantium architecto aperiam atque quae tempore delectus consequuntur sit dolore
                doloribus vero, necessitatibus quibusdam! Cumque, doloribus.
                Assumenda itaque voluptatum laudantium nisi voluptatibus delectus facere quibusdam.
                <br><br>
                accusantium dolorem possimus maxime provident sint laborum consequuntur porro exercitationem
                doloribus eos alias aliquam totam, debitis obcaecati nulla quasi. Aliquam, tenetur.
            </p>
        </div>

    </div>

    <div class="holidays">
        <div class="halloween-image"></div>
        <div class="holiday-text">
            <p class="holiday-title">
                Halloween
            </p>
            <p class="holiday-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nobis velit doloribus, illo quam aut esse blanditiis nihil minima voluptatibus temporibus
                odio, modi officiis possimus eum! Quo debitis rem deleniti.
                <br><br>
                Totam, officiis. Nisi, ipsam? Modi eveniet expedita magni placeat maxime facilis iste earum,
                fugiat laudantium architecto aperiam atque quae tempore delectus consequuntur sit dolore
                doloribus vero, necessitatibus quibusdam! Cumque, doloribus.
                Assumenda itaque voluptatum laudantium nisi voluptatibus delectus facere quibusdam.
                <br><br>
                accusantium dolorem possimus maxime provident sint laborum consequuntur porro exercitationem
                doloribus eos alias aliquam totam, debitis obcaecati nulla quasi. Aliquam, tenetur.
            </p>
        </div>

    </div>

    <div class="holidays">
        <div class="thanksgiving-image"></div>
        <div class="holiday-text">
            <p class="holiday-title">
                Thanksgiving
            </p>
            <p class="holiday-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nobis velit doloribus, illo quam aut esse blanditiis nihil minima voluptatibus temporibus
                odio, modi officiis possimus eum! Quo debitis rem deleniti.
                <br><br>
                Totam, officiis. Nisi, ipsam? Modi eveniet expedita magni placeat maxime facilis iste earum,
                fugiat laudantium architecto aperiam atque quae tempore delectus consequuntur sit dolore
                doloribus vero, necessitatibus quibusdam! Cumque, doloribus.
                Assumenda itaque voluptatum laudantium nisi voluptatibus delectus facere quibusdam.
                <br><br>
                accusantium dolorem possimus maxime provident sint laborum consequuntur porro exercitationem
                doloribus eos alias aliquam totam, debitis obcaecati nulla quasi. Aliquam, tenetur.
            </p>
        </div>

    </div>

    <div class="holidays">
        <div class="christmas-image"></div>
        <div class="holiday-text">
            <p class="holiday-title">
                Christmas
            </p>
            <p class="holiday-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nobis velit doloribus, illo quam aut esse blanditiis nihil minima voluptatibus temporibus
                odio, modi officiis possimus eum! Quo debitis rem deleniti.
                <br><br>
                Totam, officiis. Nisi, ipsam? Modi eveniet expedita magni placeat maxime facilis iste earum,
                fugiat laudantium architecto aperiam atque quae tempore delectus consequuntur sit dolore
                doloribus vero, necessitatibus quibusdam! Cumque, doloribus.
                Assumenda itaque voluptatum laudantium nisi voluptatibus delectus facere quibusdam.
                <br><br>
                accusantium dolorem possimus maxime provident sint laborum consequuntur porro exercitationem
                doloribus eos alias aliquam totam, debitis obcaecati nulla quasi. Aliquam, tenetur.
            </p>
        </div>

    </div>
    <div class="filler"></div>
</div>

</div>`;

// this is an example of a named function
function init(){
    // this is where the instrucitons go
    
    // this is a click listener that will get the link id
    $("nav .links a").click(function(e){
    //    let btnId = e.currentTarget.id;
        let btnId = this.id;
        let contentId = btnId + "Content"
        $("#app").html(eval(contentId));
    })
}

// This checks for all elements to be read by the browser
$(document).ready(function(){
    init();
})