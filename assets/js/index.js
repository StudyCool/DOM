'use strict';
/*

const _user = [
    {
    id: 1,
    name:"",
    surname: "",
    discription: "",
    socialContacts:[
        {
            name: SOCIAL_NETWORKS.FACEBOOK
            href: "",
        },
        {
            name: SOCIAL_NETWORKS.TWITTER
            href: "",
        },
        {
            name: SOCIAL_NETWORKS.SKYPE
            href: "",
        },
        {
            name: SOCIAL_NETWORKS.GOOGLE_PLUS
            href: "",
        },
        ]
    }
    ]

    const SOCIAL_NETWORKS = Object.freeze({
        FACEBOOK: "FACEBOOK",
        TWITTER: "TWITTER",
        SKYPE: "SKYPE",
        GOOGLE_PLUS: "GOOGLE_PLUS",

    })*/
  Иванович
  Степанович
Дорофеев  Онисимович
  Григорьевич
Афанасьев Овидий Дмитрьевич
Самойлов Абрам Геннадиевич
Гусев Бронислав Семенович
Белоусов Игнат Германнович
'use strict';
const users = [
    {
        id: 1,
        name: "Аким",
        surname: "Григорьев",
        imageSrc: "http://www.upruda.ru/images/business-portraits/005.jpg",
    },
    {
        id: 2,
        name: "Ян",
        surname: "Миронов",
        imageSrc: "https://i.pinimg.com/originals/ff/06/1c/ff061ce0e12e853fc42a7e381d58abc1.jpg",
    },
    {
        id: 3,
        name: "Орест",
        surname: "Дорофеев",
        imageSrc: "https://i.pinimg.com/originals/69/84/09/6984097201e414d9352b190f49656856.jpg",
    },
    {
        id: 4,
        name: "Стас",
        surname: "Лапин",
        imageSrc: "http://fotoptichka.com.ua/images/gallery/10/4b2a7527_600x900.jpg",
    },
];
const userListElem = document.getElementById("userList");
users.forEach(
    (user) => {
        userListElem.append(getUserListElem(user));
    }
);
function getUserImageElem({imageSrc}) {
    const userImageContainerElem = document.createElement('div');
    userImageContainerElem.classList.add("userImageContainer");
    const userImageElem = document.createElement("img");
    userImageElem.classList.add('userImage');
    userImageElem.setAttribute("src", imageSrc ? imageSrc : "./assets/images/icons/user_icon.jpg");
    userImageElem.setAttribute("alt", 'user picture');
    userImageContainerElem.append(userImageElem);
    return userImageContainerElem;
}
function getUserFullNameElem({name, surname}) {
    const userFullNameElem = document.createElement('div');
    userFullNameElem.innerText = `${name} ${surname}`;
    return userFullNameElem;
}
function getUserCardElem(user) {
    const userCardWrapperElem = document.createElement('div');
    userCardWrapperElem.classList.add("userCardWrapper");
    userCardWrapperElem.append(getUserImageElem(user));
    userCardWrapperElem.append(getUserFullNameElem(user));
    return userCardWrapperElem;
}
function getUserListElem(user) {
    const userListItemElem = document.createElement("li");
    userListItemElem.append(getUserCardElem(user));
    userListItemElem.setAttribute("id", user.id);
    return userListItemElem;
}