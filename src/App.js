import React, { Component } from "react";
import { COUNTRIES } from "./constants/countries";
import { ARTICLES_FROM } from "./constants/articles";
import newsApi from "./services/news";
import SearchContainer from "./components/SearchContainer";
import ResultListCounter from "./components/ResultListCounter";
import Placeholder from "./components/Placeholder";
import SearchCounter from "./components/SearchCounter";
import Header from "./components/Header";

class App extends Component {
  state = {
    searchedArticles: [],
    country: ``,
    searchString: ``,
    isLoading: false,
    article: `top-headlines`
  };

  async searchNews() {
    const { country, article, searchString } = this.state;

    try {
      this.setState({
        isLoading: true
      });
      const params = {
        q: searchString
      };
      if (article !== `everything`) params.country = country;
      
      await newsApi.get(`/${article}`, { params }).then(({ data }) => {
        this.setState({
          searchedArticles: data.articles,
          isLoading: false
        });
      });
    } catch (e) {
      this.setState({
        searchedArticles: [],
        isLoading: false
      });
    }
  }

  onSearch = async ({ key, value }) => {
    await this.setState({ [key]: value });
    this.searchNews();
  };

  render() {
    const { isLoading, searchedArticles } = this.state;
  
    return (
      <div className="ui container" style={{marginTop: '30px'}}>
        <Header name='Bob' />
        <SearchContainer
          countries={COUNTRIES}
          articles={ARTICLES_FROM}
          onUpdate={this.onSearch}
        />
        {isLoading && <Placeholder/>}
        {!isLoading && <SearchCounter count={searchedArticles.length} />}
        {!isLoading && searchedArticles && <ResultListCounter results={searchedArticles} />}
      </div>
    );
  }
}

export default App;
