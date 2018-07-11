import React, { Component } from 'react';
import Soundcloud from 'soundcloud';

import {Grid, Row, Col} from 'react-bootstrap';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

import Artist from '../components/Artist';
import Songs from '../components/Songs';

export default class Musify extends Component {

    apiUri = "http://ws.audioscrobbler.com/2.0/"
    api = {
        artists: "?method=chart.gettopartists&api_key=12db4935e98bd8de5a69cf6cf2faa75a&format=json",
        songs: "?method=artist.gettoptracks&artist=cher&api_key=12db4935e98bd8de5a69cf6cf2faa75a&format=json"
    }

    state = {
        artists: [],
        songs : []
    }

    getArtists() {
        fetch(this.apiUri + this.api.artists).
        then(results => results.json()).
        then(data => {
            let artists = [];
            data.artists.artist.forEach((artist,value) => {
                artists.push({
                    id: artist.mbid,
                    name: artist.name,
                    listeners: artist.listeners
                })
            })

            this.setState({artists});

        })
    }

    getSongs(artist) {

        return "Song for " + artist;

    }

    componentDidMount(){
        this.getArtists();
    }

    render() {
        return (
            <BrowserRouter>
                <Row>
                    <Col xs={12} md={3}>
                        <div class="musify">
                            <div class="m-sidebar__header">
                                <h2>Musify</h2>
                            </div>
                            <div class="m-sidebar__body">
                                <ul class="m-sidebar__list">
                                    {this.state.artists.map((artist) => {
                                        return (
                                            <Artist id={artist.id}
                                                    name={artist.name}
                                                    listeners={artist.listeners} />
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <Switch>
                            <Route path="/artist/:id" render={() => <Songs songs={this.getSongs()}/>}/>
                        </Switch>
                    </Col>
                </Row>
            </BrowserRouter>
        )
    }

}
