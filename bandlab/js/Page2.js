class Page2 extends React.Component {
  constructor() {
    super()

    this.state = {
      playing: -1,
      loop: false,
      tracks: [
        'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg',
        'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg',
      ],
    }

    this.playAudio = this.playAudio.bind(this)
    this.nextTrack = this.nextTrack.bind(this)
    this.previousTrack = this.previousTrack.bind(this)
    this.getTrackName = this.getTrackName.bind(this)
    this.pauseOrPlay = this.pauseOrPlay.bind(this)
    this.currentAudio = null;
  }

  validateTrackIndex(index) {
    const tracksLength = this.state.tracks.length
    if (index < 0) {
      return tracksLength - 1;
    } else if (index >= tracksLength) {
      return 0
    }
    return index;
  }

  playAudio(index) {
    const validIndex = this.validateTrackIndex(index)
    const track = this.state.tracks[validIndex]
    if (!track) {
      console.error('track is invalid')
      return;
    }

    if (this.currentAudio) {
      this.currentAudio.pause()
      this.currentAudio = null
    }

    this.currentAudio = new Audio(track)
    this.currentAudio.play()

    this.setState({
      playing: validIndex
    })
  }

  nextTrack() {
    this.playAudio(this.state.playing + 1)
  }

  previousTrack() {
    this.playAudio(this.state.playing - 1)
  }

  getTrackName(url) {
    const arr = url.split('/')
    return arr[arr.length - 1].split('.')[0];
  }

  pauseOrPlay() {
    if (!this.currentAudio) {
      this.nextTrack()
    } else if (this.currentAudio && this.currentAudio.paused) {
      this.currentAudio.play()
    } else {
      this.currentAudio.pause()
    }
  }

  render() {
    const { tracks, playing } = this.state;
    return (
      <div>
        <h2>My Tracks</h2>
        {playing >= 0 && (
          <p>
            Currently playing: {this.getTrackName(tracks[playing])}
          </p>
        )}
        <button onClick={this.previousTrack}>
          Previous
        </button>
        <button onClick={this.pauseOrPlay}>
          Pause / Play
        </button>
        <button onClick={this.nextTrack}>
          Next
        </button>
        {tracks.map((track, key) => {
          const tmp = track.split('/');
          const trackTitle = tmp[tmp.length - 1];
          return (
            <div className='Page2__track'>
              <div>{trackTitle}</div>
              <button onClick={() => this.playAudio(key)}>Play</button>
              {/* <audio ref={(input) => this.audioRef = input} key={key} controls>
                <source src={track} type='audio/ogg'></source>
                Your browser does not support audio element
              </audio> */}
            </div>
          )
        })}
      </div>
    )
  }
}