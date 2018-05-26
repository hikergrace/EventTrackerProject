import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { Tracker } from '../models/tracker';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  title = 'ngEventTracker';
  tracks: Tracker[] = [];
  track = new Tracker();
  selected = null;
  editTrack = null;

  reload = function() {
    this.trackerService.index().subscribe(
      data => this.tracks = data,
      error => console.log(error)
    );
  };

//  ~~~~~~~~~~~~~~ CRUD ~~~~~~~~~~~~~~~~~~~~
updateTracker(track) {
  this.trackerService.updateTracker(track).subscribe(
    data => {
      this.reload();
      this.selected = data;
      this.editTrack = null;
    },
    err => console.error('Observer got an error: ' + err)
  );
}

addWater() {
  this.trackerService.create(this.track).subscribe(
    data => this.reload(),
    err => console.error('Observer got an error: ' + err),
    () => this.reload()
  );
}

deleteWater = function(id) {
  console.log(id);
  this.trackerService.deleteWater(id).subscribe(
    data => this.reload(),
    err => console.error('Observer got an error: ' + err),
    () => this.reload()
  );
};
// ~~~~~~~~~~~~~END CRUD~~~~~~~~~~~~

displayTrack(track) {
  this.selected = track;
  }

  constructor( private trackerService: TrackerService) { }

  ngOnInit() {
    this.reload();
  }

}
