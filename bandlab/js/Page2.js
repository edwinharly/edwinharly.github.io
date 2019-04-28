class Page2 extends React.Component {
  constructor() {
    super()

    this.state = {
      playing: -1,
      isPaused: false,
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
      playing: validIndex,
      isPaused: false,
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
      this.setState({
        isPaused: false,
      })
    } else {
      this.currentAudio.pause()
      this.setState({
        isPaused: true,
      })
    }
  }

  render() {
    const { tracks, playing, isPaused } = this.state;
    return (
      <div className='Page2__container'>
        <p>My Tracks</p>
        <span>Add new track (url):</span>
        <input></input><button className='btn addBtn'>Add</button>
        <br />
        {playing >= 0 && (
          <p>
            {isPaused ? 'Paused' : 'Playing'}: {this.getTrackName(tracks[playing])}
          </p>
        )}
        <button className='btn prevBtn' onClick={this.previousTrack}>
          Previous
        </button>
        <button className='btn playBtn' onClick={this.pauseOrPlay}>
          Pause / Play
        </button>
        <button className='btn nextBtn' onClick={this.nextTrack}>
          Next
        </button>
        <div className='Page2__tracksContainer'>
          {tracks.map((track, key) => {
            const tmp = track.split('/');
            const trackTitle = tmp[tmp.length - 1];
            return (
              <Track 
                key={trackTitle}
                trackTitle={trackTitle} 
                handlePlay={() => this.playAudio(key)} />
            )
          })}
        </div>
      </div>
    )
  }
}