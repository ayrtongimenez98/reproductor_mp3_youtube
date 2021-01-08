import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import PlaylistSelectorItem from '../components/playlist-selector-item';


// Actions
import { onSearchPlaylistInit } from '../entities';

class PlaylistSelector extends Component {

  render(){

    const playlistItems = _.map(this.props.items, (item) => {
      return(
        <PlaylistSelectorItem
          key={item.playlistId}
          item={item}
          onSearchPlaylistInit={this.props.onSearchPlaylistInit}
          currentPage={this.props.showPage}
        />
      )
    })

    let addBrowseSelectedClass;
    if (this.props.genres.includes(this.props.showPage)){
      addBrowseSelectedClass = 'playlist-item large large-selected';
    } else {
      addBrowseSelectedClass = 'playlist-item large';
    }

    let addSearchSelectedClass;
    if (this.props.showPage === "search"){
      addSearchSelectedClass = 'playlist-item large large-selected';
    } else {
      addSearchSelectedClass = 'playlist-item large';
    }

    let addYourMusicSelectedClass;
    if (this.props.showPage === "yourMusic"){
      addYourMusicSelectedClass = 'playlist-item large large-selected';
    } else {
      addYourMusicSelectedClass = 'playlist-item large';
    }

    return (
      <ul className="sidebar">
        <li className={addSearchSelectedClass} onClick={() => this.props.onPageSelect('search')}>Buscar</li>
        <li className={addBrowseSelectedClass} onClick={() => this.props.onPageSelect('browse')}>Explorar</li>

        { this.props.user ? (
            <div>
            <li className={addYourMusicSelectedClass} onClick={() => this.props.onPageSelect('yourMusic')}>Tus canciones</li>
            <span className="playlist-heading">Tus listas de reproducción</span>
            {playlistItems}
            </div>
          ) : (
            <span className="playlist-heading">Inicia sesión para guardar listas de reproducción</span>
          )
        }

      </ul>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ onSearchPlaylistInit }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlaylistSelector);
