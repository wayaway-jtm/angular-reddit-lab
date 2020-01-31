import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image.class';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {
  title: string = '';
  ups: Number;
  downs: Number;
  thumbnail: string = '';
  over18: boolean;
  srcImage: Image;
  imgResolutions: Image[] = [];
  isVideo: boolean;
  srcVideo: Image;
  mainImg: HTMLImageElement = document.createElement('img');
  srcUrl: string = '';
  @Input() srcPost: any;

  constructor() { }

  ngOnInit() {
    this.title = this.srcPost.title;
    this.ups = this.srcPost.ups;
    this.downs = this.srcPost.downs;
    this.thumbnail = this.srcPost.thumbnail;
    this.over18 = this.srcPost.over_18;
    this.isVideo = this.srcPost.is_video;
    this.srcUrl = this.srcPost.permalink;
    if (this.isVideo) {
      let srcHeight = this.srcPost.media.reddit_video.height > 500 ? 500 : this.srcPost.media.reddit_video.height;
      let srcWidth = this.srcPost.media.reddit_video.width > 500 ? 500 : this.srcPost.media.reddit_video.width;
      this.srcVideo = new Image(this.srcPost.media.reddit_video.fallback_url, srcHeight, srcWidth);
    }
    if (this.srcPost.post_hint === 'image') {
      this.mainImg.src = this.srcPost.url;
      let srcHeight = this.mainImg.naturalHeight;
      let srcWidth = this.mainImg.naturalWidth;
      let newHeight = srcHeight;
      let newWidth = srcWidth;
      if (srcHeight > 500 || srcWidth > 500) {
        for (const tempImg of this.srcPost.preview.images[0].resolutions) {
          if (tempImg.width <= 500 && tempImg.height <= 500) {
            // Idk why they're backwards but they are
            newHeight = tempImg.width;
            newWidth = tempImg.height;
          } else {
            break;
          }
        }
      }
      this.srcImage = new Image(this.srcPost.url, newHeight, newWidth);
    }
  }

  viewFullSizeImg(srcLink: string) {
    window.open(srcLink, "_blank");
  }
}