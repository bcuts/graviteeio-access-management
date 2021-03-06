/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit, Input } from '@angular/core';
import { PlatformService } from "../../../../../../services/platform.service";

@Component({
  selector: 'provider-creation-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class ProviderCreationStep1Component implements OnInit {
  @Input() provider;
  providers: any[];
  oauth2Providers: any[];
  selectedProviderTypeId : string;

  constructor(private platformService: PlatformService) {
  }

  ngOnInit() {
    this.platformService.identities().map(res => res.json()).subscribe(data => this.providers = data);
    this.platformService.oauth2Identities().map(res => res.json()).subscribe(data => this.oauth2Providers = data);
  }

  selectProviderType(isExternal: boolean) {
    this.provider.external = isExternal;
    this.provider.type = this.selectedProviderTypeId;
  }
}
