import React from 'react';
import { Link } from 'react-router';

class SelectTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    pic: "./TourIntroductory.jpg",
                    title: "Introductory Package",
                    desc: " The introductory package offers a complete traveler experience handled by one of our exprienced local guides. They will help introduce you to the area's culture and ensure that your experience is one to remember. Whether it be food, museums, or nature, you will be in good hands."
                },

                {
                    pic: "./TourFamily.jpg",
                    title: "Family Package",
                    desc: " The family package is simply for family fun. Your guide will help create your memorable family experience by ensuring all activites are one to remember. All activities will result in pure happiness and joy with the family!"

                },

                {
                    pic: "./TourCity.jpg",
                    title: "City Package",
                    desc: "The city package offers a guide through a city's well known areas as well as those local spots. Get ready to become a local yourself by getting to know the city and its people! You'll be looking to move in as soon as possible by the end of your trip!"

                },

                {
                    pic: "./TourNightlife.jpg",
                    title: "Nightlife Package",
                    desc: "The nightlife package is for those who want the party to go on all night! Whether it is late night food runs, sightseeing, clubbing, or simply the nightime atmosphere, your guide has you covered. You simply won't want to stop to sleep!"
                },

                {
                    pic: "./TourShopping.jpg",
                    title: "Shopping Package",
                    desc: "The shopping package offers a complete experience for those looking for new fashion items and souveniers. However, this package is also for those looking for new food experiences as well. Whether you're hungry to eat everything or spend all your money, this package has you covered!"
                },

                {
                    pic: "./TourDayTrips.jpg",
                    title: "Day Trips Package",
                    desc: "The day trips package is for those who want to experience more than just the area they're residing in. Expect to be on the road, sea, or even air to new neigboring areas to experience the whole country. You'll be a native by the end of your trip!"
                }

            ]
        };
    }

    render() {
        let Contents = this.state.content;
        let contentList = Contents.map(cont =>
            <div className="row" style={{ marginBottom: "35px" }}>
                <div className="col-sm-6 col-md-6">
                    <img src={require(cont.pic)} style={{ width: "80%", height: "300px" }} alt="cool" />
                </div>

                <div className="col-sm-6 col-md-6">
                    <h2 style={{ color: "white" }}>{cont.title}</h2>
                    <h4 style={{ color: "white" }}>{cont.desc}</h4>
                </div>
            </div>
        );

        return (
            <div className="container-fluid homeBG">


                <img src={require("./TourHome.jpg")} style={{ width: "100%" }} alt="tourImage" />
                <p style={{ color: "white", textAlign: "center", fontSize: "4em" }}>You decide the trip!</p>
                <Link to={'tourFinal'}>
                    <div className="container-fluid">
                        {contentList}
                    </div>
                </Link>

            </div>
        );
    }
}

export default SelectTour;
