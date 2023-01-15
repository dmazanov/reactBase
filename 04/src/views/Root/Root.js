import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

const initialStateItems = [
  {
    image: "https://media-thumbs.golden.com/ZmJ_IKu3lu990Y0AEMnTva3gPus=/200x200/smart/golden-media.s3.amazonaws.com%2Ftopic_images%2F9d7886fae3ed43b087619486434a7f95.jpeg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: true,
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <BrowserRouter>
        <Header openModalFn={this.openModal} />
        <Routes>
          <Route exact path="/" element={<TwittersView  />} />
          <Route path="/articles" element={<ArticlesView />} />
          <Route path="/notes" element={<NotesView />} />
        </Routes>
        { isModalOpen && <Modal  closeModalFn={this.closeModal} /> }
      </BrowserRouter>
    );
  }
}

export default Root;
