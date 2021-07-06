import React from 'react'

/**
 * 
 * @param {state, dataKey} params 
 * @returns 
 */
export default function News(params) {
  let {state, dataKey} = params;
  console.log(state.data[dataKey]);
  let newsUi;
  let newsCardsUi = [];
  if (state.data[dataKey]) {

    for (let i = 0; i < state.data[dataKey].length; i++) {
      let item = state.data[dataKey][i];
      newsCardsUi.push(
        <div className="card border-light bg-success my-1" key={"newsCard"+i}>
          <div className="card-body">
            <h3 className="display-4">{item.title}</h3>
            <p className="news-description">{item.description}</p>
            <a href="item.link" className="btn btn-outline-light news-link stretched-link">{item.linkText || 'Learn more'}</a>
          </div>
        </div>
      )
    }

    newsUi =
      <div id="news" className="bg-success py-3 text-white">
        <h2 className="display-1 text-center">News</h2>
        <hr className="star-light" />
        <div className="container container-small newses">
          {newsCardsUi}
        </div>
      </div>
  }
  return (<>{newsUi}</>)
}
