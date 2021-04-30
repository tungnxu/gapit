import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Province, QueryVote, User, VoteItem, VoteResponse } from '../types/models';
import { BaseApi } from './base-api.class';
import { apiUrl } from './base-url.class';

@Injectable({
  providedIn: 'root'
})
export class VoteApi extends BaseApi {
  constructor(
    httpClient: HttpClient,
    @Inject(apiUrl) protected hostUrl: string,
  ) {
    super(httpClient)
    this.setEndpoint(hostUrl, '/vote')
  }

  getTopVotes(take?: number ){
    const params = {take: take}
    return this.httpClient.get<VoteItem[]>(this.createUrl(`topten`), { params: this.createParams(params)})
  }

  getListVotes(skip: number, take: number){
    const params = {skip: skip, take: take}
    return this.httpClient.get<QueryVote>(this.createUrl(`List`), { params: this.createParams(params)})
  }

  likePainting(examId: string) {
    const command = {examId: examId, type: 'like'}
    return this.httpClient.post<VoteResponse>(this.createUrl('Voting'), command)
  }

  dislikePainting(examId: string) {
    const command = {examId: examId, type: 'unlike'}
    return this.httpClient.post<VoteResponse>(this.createUrl('Voting'), command)
  }

  sharePainting(examId) {
    const command = {examId: examId, type: 'share'}
    return this.httpClient.post<VoteResponse>(this.createUrl('Voting'), command)
  }

  takeGift(examid: any,phone:string, email:string){
    const command = {examid: examid, phone: phone, email: email}
    return this.httpClient.post<VoteResponse>(this.createUrl('gift'), command)
  }
}
