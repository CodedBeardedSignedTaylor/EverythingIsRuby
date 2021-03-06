import React, { Component } from 'react';
import Axios from 'axios';
import { API } from '../utilities/api.js';

function PageRow(props) {

  let title = props.title;
  let link_title = title.replace(/ /g, '-');

  let linkUrl = "/pages/" + link_title + "/edit";

  return (
    <tr>
      <td>{props.title}</td>
      <td><button className="button is-warning"><a href={linkUrl}>Edit</a></button></td>
      <td><button className="button is-danger">Destroy</button></td>
    </tr>
  );
}

class PageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
    this.fetchPages();
  };

  async fetchPages() {
    let tokenHeader = document.querySelectorAll('meta[name="csrf-token"]')[0].content;
    let apiUrl = API.protocol + API.host + "/api/v1/pages";
    let response = await Axios({
      method: 'get',
      url: apiUrl,
      data:{
      },
      headers: { 'X-CSRF-TOKEN' : tokenHeader }
    });
    this.setState({
      pages: response.data.data
    });
  }

  render() {
    return (
      <div className="page-view">
        <h3>Looking at Page View!</h3>
        <table className="table table-striped is-fullwidth">
          <tbody>
            <tr>
              <th>Title</th>
              <th colSpan="2">Actions</th>
            </tr>
            { this.state.pages.map(page => <PageRow key={page.id} title={page.title} />) }
          </tbody>
        </table>
        <button className="button is-success"><a href="/pages/new">New Page</a></button>
      </div>
    );
  }
}

export default PageView;