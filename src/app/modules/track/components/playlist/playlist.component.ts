import { Component, OnInit } from '@angular/core';
import { Track } from '../../classes/track';
import { TrackService } from '../../services/track.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  private tracks: Array<Track>;
  private statusCode: number;
  private errorStatus: string;

  constructor(private trackService: TrackService, private snackBar: MatSnackBar, private route: ActivatedRoute) {
    this.tracks = [];
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      if (data.search !== undefined && data.search !== '' && data.search.replace(' ', '').length > 0) {
        console.log('Search Added Track');
        // this.trackService.serachTrackFM(this.searchTrack, 10).subscribe((res: any) => {
        //   this.tracks = [];
        //   this.tracks = res;
        // });

        this.searchTracks(data.search);
      } else {
        this.fetchTracks();
      }
    });
  }

  private fetchTracks() {
    this.trackService.getAddedTracks().subscribe((res: any) => {
      this.tracks = res.body;
      console.log(this.tracks);
      });
  }

  private searchTracks(trackName: string) {
    this.trackService.searchAddedTracks(trackName).subscribe((res: any) => {
      this.tracks = res.body;
    });

  }

  deleteTrack(trackId) {
    this.trackService.deleteTrackFromPlayList(trackId).subscribe(
      response => {
        this.statusCode = response.status;
        if (this.statusCode === 200) {
          this.fetchTracks();
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Deleted !!!', '', {
            duration: 1500
          });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 404) {
          this.snackBar.open('Track Doesn\'t Exist', '', {
            duration: 1500
          });
          this.statusCode = 0;
        }
    });
  }

  updateTrack(track) {
    this.trackService.updateAddedTrack(track).subscribe(
      response => {
        this.statusCode = response.status;
        if (this.statusCode === 200) {
          this.fetchTracks();
          console.log('Success', this.statusCode);
          this.snackBar.open('Track Successfully Updated !!!', '', {
            duration: 1500
          });
        }
      },
      err => {
        const errorStatus = err;
        this.statusCode = parseInt(errorStatus, 10);
        if (this.statusCode === 404) {
          this.snackBar.open('Track Doesn\'t Exist', '', {
            duration: 1500
          });
          this.statusCode = 0;
        }
    });
  }

}
