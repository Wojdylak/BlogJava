import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      "postId": 1,
      "user": null,
      "category": {
        "categoryId": 1,
        "name": "Laptopy",
      },
      "title": "Nowa bateria do laptopa",
      "text": " Suspendisse nec blandit metus. Pellentesque ac nisi id orci hendrerit varius. Nunc accumsan pellentesque tellus. Vivamus lacinia id felis ultrices vestibulum. Mauris semper mi nec enim suscipit, a tincidunt orci rhoncus. Nulla convallis orci libero, non placerat elit mattis vel. Cras cursus, massa eget feugiat pretium, nibh nunc posuere lorem, vel luctus orci tellus mattis sapien. Morbi fringilla turpis at lorem fringilla gravida. Sed semper, purus in blandit aliquam, diam tellus suscipit purus, ac volutpat diam arcu quis mi. Aenean eu dictum lorem, quis euismod turpis. Nulla sollicitudin dui eu lorem luctus, nec fermentum orci fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget augue tempor, mollis turpis quis, malesuada turpis. Nunc risus tortor, tristique a purus ac, ornare ultricies eros. Vivamus quis purus arcu. Integer cursus, est pharetra feugiat tempor, nisi lacus porta tellus, vitae scelerisque erat augue nec mauris. Nullam ac velit vitae eros porta luctus. Nunc tristique interdum viverra. Pellentesque semper turpis euismod hendrerit eleifend. Curabitur eleifend, magna in aliquam semper, lacus orci pulvinar dolor, vel vehicula massa magna quis urna. Donec vel mauris id neque tempor lacinia. Vivamus congue, lorem at volutpat sollicitudin, leo risus aliquet orci, eu consequat est tortor ac augue. Proin sit amet egestas ipsum. ",
      "createDate": "2019-04-24T17:38:32.581+0000",
    },
    {
      "postId": 2,
      "user": null,
      "category": {
        "categoryId": 1,
        "name": "Komputery",
      },
      "title": "Nowa karta graficzna do twojego komputera",
      "text": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus luctus est a lacinia. Donec ac massa risus. Ut massa tortor, sollicitudin vel varius accumsan, molestie id leo. Curabitur commodo tristique elementum. Pellentesque suscipit auctor libero aliquet molestie. Donec egestas turpis eget tincidunt accumsan. Nullam id odio viverra, hendrerit leo eget, mattis metus. Cras vitae nunc vitae nunc molestie volutpat condimentum ut nisl. Cras cursus mauris ultrices, vestibulum est elementum, bibendum sapien. Sed hendrerit, risus ut rutrum vestibulum, urna felis tempus orci, at accumsan dui arcu eu lorem. Nunc non nisi lobortis lectus feugiat pharetra et nec elit. Nulla blandit quam eu dolor pretium congue. Duis vel tellus vel nunc pulvinar gravida quis eget nisl. Cras vulputate bibendum tortor, ac blandit nunc tempus at. Curabitur et congue ligula. Vivamus luctus justo et fermentum iaculis. Fusce nulla urna, malesuada aliquam orci ornare, condimentum pulvinar ex. Suspendisse potenti. Vivamus vitae efficitur elit. Suspendisse convallis risus a erat pulvinar aliquet. Aliquam viverra pretium turpis, ac rutrum tellus semper eu. Nulla fringilla, turpis non ultrices ullamcorper, dolor dui accumsan massa, lacinia pulvinar magna felis quis erat. Cras suscipit diam ac nisi aliquet pharetra. Vestibulum accumsan semper ultrices. Morbi urna sem, gravida non risus id, convallis facilisis sem. Maecenas turpis ligula, ultricies ac aliquam at, semper quis lectus. Nullam quam justo, cursus eu justo a, sollicitudin pellentesque sapien. Quisque feugiat fermentum libero, nec malesuada risus vestibulum et. Donec bibendum vulputate nibh, eu pulvinar nibh lacinia eu. In tempus odio eu lacus pellentesque porttitor. Cras justo massa, imperdiet id nisl sed, sagittis porttitor nisl. Vestibulum sed congue eros, quis convallis lacus.",
      "createDate": "2019-04-24T17:38:32.581+0000",
    }
  ]



  constructor(private http: HttpClient) { }

  getPosts(){
    return this.posts
  }

}
