import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AppSeoService {

  constructor(
    private readonly metaTag: Meta,
    private readonly title: Title
  ) {}

  initHead() {
    this.title.setTitle('App SSR start');
    this.metaTag.addTag({
      name: 'app-seo',
      content: 'how to use universal for Angular'
    });
  }

  updateTitle(title: string) {
    this.title.setTitle(title)
  }

  createMetaTag(metaDefinition: MetaDefinition, forceCreate = false) {
    this.metaTag.addTag(metaDefinition)
  }

  createMultipleMetaTag(metaDefinition: MetaDefinition[], forceCreate = false) {
    this.metaTag.addTags(metaDefinition)
  }

  updateMetaTag(metaDefinition: MetaDefinition) {
    this.metaTag.updateTag(metaDefinition);
  }
}
