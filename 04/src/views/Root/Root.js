import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";


class Root extends React.Component {
  state = {
    twitter: [],
    article:[],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));

    this.closeModal();
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
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      name: 'Roman',
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Routes>
            <Route exact path="/" element={<TwittersView  />} />
            <Route path="/articles" element={<ArticlesView />} />
            <Route path="/notes" element={<NotesView />} />
          </Routes>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }  
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
