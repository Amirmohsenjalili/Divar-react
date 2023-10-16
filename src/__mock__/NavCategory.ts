interface NavCategoryItem {
    id: number;
    title: string;
    items: {
      a: string;
      b: string;
      c?: string;
    }[];
  }

const NavCategory: NavCategoryItem[] = [
    {
        id: 0,
        title: "فروش مسکونی",
        items: [
            {
                a: "آپارتمان",
                b: "خانه و ویلایی",
                c: "زمین و کلنگی"
            }
        ]
    },
    {
       id: 1,
       title: "اجاره مسکونی", 
       items: [
            {
                a:"آپارتمان",
                b:"خانه و ویلا"
            }
       ]
    },
    {
        id: 2,
        title:"فروش اداری و تجاری",
        items: [
            {
                a:"دفتر کار،اتاق اداری و مطب",
                b:"مغازه و غرفه",
                c:"صنعتی، کشاورزی و تجاری"
            }
        ]
    }
    ,
    {
        id: 3,
        title:"اجاره اداری و تجاری",
        items: [
            {
                a:"دفتر کار،اتاق اداری و مطب",
                b:"مغازه و غرفه",
                c:"صنعتی، کشاورزی و تجاری"
            }
        ]
    },
    {
        id: 4,
        title:"اجاره کوتاه مدت",
        items: [
            {
                a:"آپارتمان و سوئیت",
                b:"ویلا و باغ",
                c:"دفتر کار و فضای آموزشی"
            }
        ]
    },
    {
        id: 5,
        title:"پروژه های ساخت و ساز",
        items: [
            {
                a:"مشارکت در ساخت",
                b:"پیش فروش"
            }
        ]
    }
]

export default NavCategory;