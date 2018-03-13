import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';


class TabContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    pic: "./HomeRegNewZealand.jpg",
                    title: "New Zealand's Classic Trail",
                    desc: "  Kiwis may call it “tramping”, but there’s nothing down-market about the Milford Track. This most famous of NZ’s Classic Trails is highly regulated due to its popularity and you should book well in advance as a maximum of 90 walkers a day start the trail. The 33-mile trek takes in mountains, waterfalls, lakes and glacial valleys and you will stay in comfortable lodges (guided walking) or basic huts (independent)."
                },

                {
                    pic: "./HomeRegAlps.jpg",
                    title: "Snow Sports in the Alps",
                    desc: "Explore the best downhill tracks of the Southern French Alps using ski lifts and vehicle shuttles to get you to the cols and passes to start your descents. The majority of the routes are on a mixture of single-tracks and mountain trails and the itinerary can be adapted to suit individuals. At the ski resort of Orcières, there is a choice of graded downhill routes including one mega-descent of 5,900ft."

                },

                {
                    pic: "./HomeRegMtFuji.jpg",
                    title: "Mt. Fuji Day Trip",
                    desc: "Full-day trip to Mt Fuji, Lake Ashi and Mt Komagatake. See the stunning Japanese landscape as you drive to Mt Fuji's 5th Station by deluxe coach. Japanese-style lunch included. Discover the cultural importance of UNESCO-listed Mt Fuji with your knowledgeable guide. Enjoy a sightseeing cruise on beautiful Lake Ashi. Take in stunning views over Hakone National Park from the Mt Komagatake Ropeway and stroll around the mountain's summit. Hotel pickup from select hotels and locations in Tokyo"

                },

                {
                    pic: "./HomeRegCapeTown.jpg",
                    title: "Cape Town Townships Tour",
                    desc: "Take a fascinating trip through South Africa’s difficult past with a tour of Cape Town and Robben Island, where Nelson Mandela spent 18 of his 27 years in prison. Visit the District Six Museum to get an in-depth look at the troubling history of apartheid in South Africa, and see how that system still impacts modern life in townships like Khayelitsha, Langa and Gugulethu. See how residents of these townships work to improve their lives and communities. Take a ferry to UNESCO-listed Robben Island for a tour of the former prison for political prisoners."
                },

                {
                    pic: "./HomeRegNewZealand.jpg",
                    title: "English Treasures",
                    desc: "See three of England’s architectural treasures on a full-day trip to Windsor Castle, Stonehenge, and Oxford from London. First, check out Windsor Castle, second home to the Queen of England, and opt to upgrade with a guided tour of the castle’s opulent interior. Next, head to Stonehenge to uncover the mystery behind this UNESCO-listed site, and then explore the canals of Oxford on a complimentary walking tour of the city. Upgrade to include entrance fees, or enjoy the flexibility of deciding on the day which attractions you'd like to visit."
                }

            ]
        };
    }


    render() {

        let Contents = this.state.content;
        let contentList = Contents.map(cont =>
            <div className="row" style={{ marginBottom: "100px" }}>

                <Link to="tourFinal">
                    <div className="col-sm-6 col-md-6">
                        <img src={require(cont.pic)} style={{ width: "80%", height: "300px" }} alt="cool" />
                    </div>

                    <div className="col-sm-6 col-md-6">
                        <h2 style={{ color: "black" }}>{cont.title}</h2>
                        <h4 style={{ color: "black" }}>{cont.desc}</h4>
                    </div>
                </Link>
            </div>

        );

        return (
            <div>
                {contentList}
            </div>
        );
    }
}

export default TabContents;
