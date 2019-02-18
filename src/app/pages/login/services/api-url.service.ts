import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

export class ApiUrlService {

  /**
   * PostsignIn
   * 로그인
   */
  public PostsignIn: string = environment.basePath +
    '';
}
