import React, { Component } from "react";
import Searchitem from "./Searchitem";
// import axios from "axios";
import results from "../public/samplesearch.json";

console.log(results);

// var data = {
//   result: {
//     status: "OK"
//   },
//   meta: {
//     title: "Startup Bundle - The best and biggest resource bundle for startups",
//     description:
//       "This bundle contains all the tools and resource a startup could use. All the stuff on a massive discounted price. upto 98% off.",
//     favicon: "https://startupbundle.com/favicon.png"
//   }
// };

// Axios.get()

var queryResults = [
  {
    position: 1,
    title: "Coffee - Wikipedia",
    link: "https://en.wikipedia.org/wiki/Coffee",
    displayed_link: "https://en.wikipedia.org/wiki/Coffee",
    snippet:
      "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa ...",
    sitelinks: {
      inline: [
        {
          title: "History",
          link: "https://en.wikipedia.org/wiki/Coffee#History"
        },
        {
          title: "Cultivation",
          link: "https://en.wikipedia.org/wiki/Coffee#Cultivation"
        },
        {
          title: "Processing",
          link: "https://en.wikipedia.org/wiki/Coffee#Processing"
        },
        {
          title: "Health effects",
          link: "https://en.wikipedia.org/wiki/Coffee#Health_effects"
        }
      ]
    },
    cached_page_link:
      "https://webcache.googleusercontent.com/search?q=cache:U6oJMnF-eeUJ:https://en.wikipedia.org/wiki/Coffee+&cd=4&hl=en&ct=clnk&gl=us",
    related_pages_link:
      "https://www.google.com/search?gl=us&hl=en&q=related:https://en.wikipedia.org/wiki/Coffee+Coffee&tbo=1&sa=X&ved=0ahUKEwjH9Pv24qvcAhXJKiwKHTClDpsQHwhsMAM"
  },
  {
    position: 2,
    title: "Fleet Coffee - Austin",
    link: "http://www.fleetcoffee.com/",
    displayed_link: "www.fleetcoffee.com/",
    snippet:
      "We make coffee, sometimes people like it. ... Coffee. Espresso. Americano. Macchiato. Cortado. Cappuccino. Latte. Drip. Kalita Pourover. Chemex Pourover.",
    cached_page_link:
      "http://webcache.googleusercontent.com/search?q=cache:OHMW3xP0sQMJ:www.fleetcoffee.com/+&cd=5&hl=en&ct=clnk&gl=us",
    related_pages_link:
      "https://www.google.com/search?gl=us&hl=en&q=related:www.fleetcoffee.com/+Coffee&tbo=1&sa=X&ved=0ahUKEwjH9Pv24qvcAhXJKiwKHTClDpsQHwh_MAQ"
  }
];

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "inload"
    };
  }

  componentWillMount() {
    this.setState({ loading: "inload" });
    setTimeout(() => {
      this.props.logotoText();
      this.setState({ loading: "" });
      console.log(this.props);
      //   this.props.closeAppMenu();
    }, 800);
  }

  render() {
    return (
      <div className="search-results">
        <ul>
          <li>
            <Searchitem
              delay="0.2s"
              loading={this.state.loading}
              data={queryResults}
            />
          </li>
          <li>
            <Searchitem
              loading={this.state.loading}
              delay="0.4s"
              data={queryResults}
            />
          </li>
          <li>
            <Searchitem
              loading={this.state.loading}
              delay="0.6s"
              data={queryResults}
            />
          </li>
          <li>
            <Searchitem
              loading={this.state.loading}
              delay="0.8s"
              data={queryResults}
            />
          </li>
          <li>
            <Searchitem
              loading={this.state.loading}
              delay="1s"
              data={queryResults}
            />
          </li>
          <li>
            <Searchitem
              loading={this.state.loading}
              delay="1.2s"
              data={queryResults}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchResults;
