import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getListVotes(skip: number, take: number, examId?: string){
    const params = {skip: skip, take: take, examId: examId}
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

  takeGift(examid: any, email:string){
    const command = {examid: examid,  email: email}
    return this.httpClient.post<VoteResponse>(this.createUrl('gift'), command)
  }

  getListVotesV2(skip: number, take: number, examId?: string){
    const params = {skip: skip, take: take, examId: examId}
    return of<QueryVote>({
      total: 2,
      data: [
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "2",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "3",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
        {
          Name: "Bai thi cho em",
          StudentName: "Nguyen van linh",
          NumberOfLikes: 10,
          NumberOfShare: 10,
          Image: "https://placeimg.com/640/480/any",
          ExamId: "1",
          isLiked: false,
          District: "giap bat",
          Province: "gia lam",
          Description: "Bai thi ve thien nhien cuart bạn asdf asdf á",
          CreatedAt: new Date()
        },
      ]
    })
    // return this.httpClient.get<QueryVote>(this.createUrl(`List`), { params: this.createParams(params)})
  }


}
