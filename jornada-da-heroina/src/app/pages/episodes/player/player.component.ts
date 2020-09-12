import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


  @Input() episode: string;

  element: HTMLElement;

  @ViewChild('audioPlayer') audioPlayer: ElementRef;
  @ViewChild('progressBar') progressBar: ElementRef;
  @ViewChild('audioBar') audioBar: ElementRef;

  playStatus = false;
  audio = true;
  time = 0;
  duration = 0;
  interval;
  constructor() {
  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {

    this.progressBar.nativeElement.addEventListener('click', (event) => {
      const percent = event.offsetX / this.progressBar.nativeElement.offsetWidth;
      this.audioPlayer.nativeElement.currentTime = percent * this.audioPlayer.nativeElement.duration;
    });

    this.audioBar.nativeElement.addEventListener('change', (event) => {
      this.updateAudio();
    });
  }

  ngAfterViewChecked(){
    this.duration = this.getDuration();
  }
  updateAudio() {
    this.audioPlayer.nativeElement.volume = this.audioBar.nativeElement.value / 100;
    this.audio = this.audioPlayer.nativeElement.volume > 0;
  }

  getDuration() {
    return this.audioPlayer.nativeElement.duration ? this.audioPlayer.nativeElement.duration : 0;
  }

  timeUpdate() {
    this.time = this.getCurrentTime();
    this.progressBar.nativeElement.val = this.time;
  }

  changeStatus() {
    this.playStatus = !this.playStatus;
    if (this.playStatus) {
      this.audioPlayer.nativeElement.play();
      this.playTimer();
    } else {
      this.audioPlayer.nativeElement.pause();
      this.pauseTimer();
    }
  }

  playTimer() {
    this.interval = setInterval(() => { this.time }, 100);
  }

  getCurrentTime(){
    return Math.round(this.audioPlayer.nativeElement.currentTime);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  transformTime(value: number): string {
    if (!value || value === 0){ return '00:00'; }
    const hours: number = Math.floor(value / 60);
    const minutes: number = (value - hours * 60);

    if (hours < 10 && minutes < 10) {
        return '0' + hours + ' : 0' + (value - hours * 60);
    }
    if (hours > 10 && minutes > 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
    if (hours > 10 && minutes < 10) {
        return hours + ' : 0' + (value - hours * 60);
    }
    if (minutes >= 10) {
        return '0' + hours + ' : ' + (value - hours * 60);
    }
  }

  jumpTime(time: number) {
    this.audioPlayer.nativeElement.currentTime += time;
    this.timeUpdate();
  }
  changeAudio() {

    this.audio = !this.audio;
    this.audioBar.nativeElement.value = this.audio ? 50 : 0;
    this.updateAudio();
  }
}
