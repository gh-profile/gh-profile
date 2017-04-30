import { Component, OnInit } from '@angular/core'

import { LangInfo } from '../lang/lang-info'
import { SkillInfo } from '../skill/skill-info'

@Component({
  selector: 'language-tab',
  providers: [],
  styleUrls: [ './tab.component.css' ],
  templateUrl: './language-tab.component.html'
})
export class LanguageTabComponent implements OnInit {
  public langInfos: LangInfo[]
  public skillInfos: SkillInfo[]

  public ngOnInit() {
    this.langInfos = [
      new LangInfo('Javascript', '#70AFC4', 100),
      new LangInfo('Scala', '#7AC1C4', 88),
      new LangInfo('Java', '#8CCCBE', 80),
      new LangInfo('Typescript', '#ADD8C7', 70),
      new LangInfo('Golang', '#E0A3FF', 60),
    ]

    this.skillInfos = [
      new SkillInfo('kafka'),
      new SkillInfo('spark'),
      new SkillInfo('akka'),
      new SkillInfo('scalaz'),
      new SkillInfo('Finch'),
      new SkillInfo('react'),
      new SkillInfo('redux-saga'),
      new SkillInfo('angular2'),
      new SkillInfo('angular1'),
      new SkillInfo('gokit'),
      new SkillInfo('docker'),
      new SkillInfo('jenkins'),
      new SkillInfo('travis'),
    ]
  }
}
