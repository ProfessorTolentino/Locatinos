import {Carousel} from './carousel/carousel.model'


export class HomeService{

  constructor(){};

  private carsList: Carousel[]=[
    {
      id:0,
      title:'Caprice SS',
      imagePath:'1.png'
    },
    {
      id:1,
      title:'Fusion Titanium',
      imagePath:'2.png'
    },
    {
      id:2,
      title:'Hyundai Tucson GLS',
      imagePath:'3.png'
    },
    {
      id:3,
      title:'Hyundai Grandeur',
      imagePath:'4.png'
    },
    {
      id:4,
      title:'New Civic',
      imagePath:'5.png'
    }
]

  cars():Carousel[]{
    return this.carsList;
  }

}
