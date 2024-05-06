import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.css']
})
export class VideoPopupComponent implements OnInit ,OnChanges{

  @Input() showPopup:boolean=false;
  @Input() close:boolean=false;
  @Input() ytUrl:string | undefined = undefined;
  @Output('close')
  onClose = new EventEmitter();
  safeURL!:SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inIt();
  }

  ngOnInit(): void {
    this.inIt();
  }

  inIt(){
    if(this.showPopup){
      this.disabledBodyScroll();
    }
    this.safeURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.ytUrl as string);
  }

  closeModal(){
    this.onClose.emit();
    this.enabledBodyScroll();
  }

  disabledBodyScroll(){
    document.body.style.setProperty('overflow','hidden');
  }


  enabledBodyScroll(){
    document.body.style.setProperty('overflow','scroll');
  }
}
