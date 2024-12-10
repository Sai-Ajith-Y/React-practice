import React from "react";
import ReactDOM from "react-dom/client";
import logo from './img/logo.jpg';
/* 
     Header
          - logo
          - Nav Items
     Body
          - search
          - RestaurantContainer
          - RestaurantCard
               - img
               -name of res, star rating, cuisine, delivery time
     Footer
          - copyright
          - links
*/
// Header Component
const Header = () => {
     return (
          <div className = "header">
               <div className="logo-container">
                    <img className="logo" src={logo}/>
                    {/*src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"*/}
                    
               </div>
               <div className = "nav-items">
                    <ul>
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Contact Us</li>
                         <li>Cart</li>
                    </ul>
               </div>
          </div>
     );

};

// RestaurantCard
const RestaurantCard = (props) => {
     const {resData} = props;
     console.log(resData?.info,"resData.info")
     return (
          
          <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
               <img className="res-logo" alt="res-logo"  
               src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId }/>
               <h3>{resData.info.name}</h3>
               <h4>{resData.info.cuisines.join(" , ")}</h4>
               <h4>{resData.info.avgRating} stars</h4>
               <h4>${resData.info.costForTwo/100} for two </h4>
               <h4>{resData.info.sla.deliveryTime} minutes</h4>
          </div>


     );
};

const resList = [ 
     {
       "info": {
         "id": "201224",
         "name": "Asha Tiffins",
         "cloudinaryImageId": "n15vckntsiboiod3gpco",
         "locality": "HSR Layout",
         "areaName": "HSR Layout",
         "costForTwo": "₹200 for two",
         "cuisines": [
           "Chinese",
           "Desserts",
           "Beverages",
           "North Indian"
         ],
         "avgRating": 4.5,
         "parentId": "236243",
         "avgRatingString": "4.5",
         "totalRatingsString": "65K+",
         "sla": {
           "deliveryTime": 27,
           "lastMileTravel": 4,
           "serviceability": "SERVICEABLE",
           "slaString": "25-30 mins",
           "lastMileTravelString": "4.0 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-05 15:30:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "4.4",
             "ratingCount": "16K+"
           },
           "source": "GOOGLE",
           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/asha-tiffins-hsr-layout-rest201224",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "898222",
         "name": "Iyer Idly",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
         "locality": "Adugodi",
         "areaName": "Koramangala",
         "costForTwo": "₹200 for two",
         "cuisines": [
           "South Indian"
         ],
         "avgRating": 4.6,
         "veg": true,
         "parentId": "247814",
         "avgRatingString": "4.6",
         "totalRatingsString": "98",
         "sla": {
           "deliveryTime": 22,
           "lastMileTravel": 1.6,
           "serviceability": "SERVICEABLE",
           "slaString": "20-25 mins",
           "lastMileTravelString": "1.6 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-05 21:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "isNewlyOnboarded": true,
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "--"
           }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/iyer-idly-adugodi-koramangala-rest898222",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "526109",
         "name": "Arogya Ahaara",
         "cloudinaryImageId": "d0jnosd8rwjljcjnxkec",
         "locality": "HSR Layout",
         "areaName": "HSR Layout",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "South Indian",
           "North Indian",
           "Sweets",
           "Chinese"
         ],
         "avgRating": 4.5,
         "parentId": "301948",
         "avgRatingString": "4.5",
         "totalRatingsString": "8.2K+",
         "sla": {
           "deliveryTime": 26,
           "lastMileTravel": 3.9,
           "serviceability": "SERVICEABLE",
           "slaString": "25-30 mins",
           "lastMileTravelString": "3.9 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-05 11:00:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
             }
           ]
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "4.5",
             "ratingCount": "14K+"
           },
           "source": "GOOGLE",
           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/arogya-ahaara-hsr-layout-rest526109",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "325",
         "name": "Sree Krishna Kafe",
         "cloudinaryImageId": "us72sjlfo9opsmi8fi6u",
         "locality": "Koramangala",
         "areaName": "Koramangala",
         "costForTwo": "₹137 for two",
         "cuisines": [
           "South Indian"
         ],
         "avgRating": 4.7,
         "parentId": "898",
         "avgRatingString": "4.7",
         "totalRatingsString": "54K+",
         "sla": {
           "deliveryTime": 13,
           "lastMileTravel": 0.6,
           "serviceability": "SERVICEABLE",
           "slaString": "10-15 mins",
           "lastMileTravelString": "0.6 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-05 22:30:00",
           "opened": true
         },
         "badges": {
           "imageBadges": [
             {
               "imageId": "v1695133679/badges/Pure_Veg111.png",
               "description": "pureveg"
             }
           ]
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "pureveg",
                     "imageId": "v1695133679/badges/Pure_Veg111.png"
                   }
                 }
               ]
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "4.3",
             "ratingCount": "4.7K+"
           },
           "source": "GOOGLE",
           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/sree-krishna-kafe-koramangala-rest325",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "387468",
         "name": "The Breakfast Nook",
         "cloudinaryImageId": "3a26aa967dc44e104627a4b8a8117454",
         "locality": "6th Sector",
         "areaName": "HSR Layout",
         "costForTwo": "₹300 for two",
         "cuisines": [
           "American",
           "Continental",
           "Healthy Food",
           "Beverages"
         ],
         "avgRating": 4.5,
         "parentId": "257216",
         "avgRatingString": "4.5",
         "totalRatingsString": "5.1K+",
         "sla": {
           "deliveryTime": 36,
           "lastMileTravel": 3.9,
           "serviceability": "SERVICEABLE",
           "slaString": "35-40 mins",
           "lastMileTravelString": "3.9 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-12 00:00:00",
           "opened": true
         },
         "badges": {
           "textExtendedBadges": [
             {
               "iconId": "guiltfree/GF_Logo_android_3x",
               "shortDescription": "options available",
               "fontColor": "#7E808C"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "",
                     "fontColor": "#7E808C",
                     "iconId": "guiltfree/GF_Logo_android_3x",
                     "shortDescription": "options available"
                   }
                 }
               ]
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "60% OFF",
           "subHeader": "UPTO ₹120"
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "--"
           }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/the-breakfast-nook-6th-sector-hsr-layout-rest387468",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "269402",
         "name": "The Tea Brewery",
         "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
         "locality": "1st Block",
         "areaName": "Koramangala",
         "costForTwo": "₹100 for two",
         "cuisines": [
           "Beverages",
           "Snacks",
           "Bakery",
           "Desserts",
           "Fast Food",
           "Chaat",
           "Healthy Food"
         ],
         "avgRating": 4.7,
         "parentId": "21147",
         "avgRatingString": "4.7",
         "totalRatingsString": "11K+",
         "sla": {
           "deliveryTime": 24,
           "lastMileTravel": 1.6,
           "serviceability": "SERVICEABLE",
           "slaString": "20-25 mins",
           "lastMileTravelString": "1.6 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-06 00:00:00",
           "opened": true
         },
         "badges": {
           "textExtendedBadges": [
             {
               "iconId": "guiltfree/GF_Logo_android_3x",
               "shortDescription": "options available",
               "fontColor": "#7E808C"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "",
                     "fontColor": "#7E808C",
                     "iconId": "guiltfree/GF_Logo_android_3x",
                     "shortDescription": "options available"
                   }
                 }
               ]
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "50% OFF",
           "subHeader": "UPTO ₹100"
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "--"
           }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/the-tea-brewery-1st-block-koramangala-rest269402",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "241027",
         "name": "Namaste",
         "cloudinaryImageId": "dtcwa1rxdskp3crqvpr3",
         "locality": "3rd Sector",
         "areaName": "Hsr Layout",
         "costForTwo": "₹100 for two",
         "cuisines": [
           "South Indian",
           "Chinese",
           "Thalis"
         ],
         "avgRating": 4.4,
         "veg": true,
         "parentId": "366271",
         "avgRatingString": "4.4",
         "totalRatingsString": "27K+",
         "sla": {
           "deliveryTime": 31,
           "lastMileTravel": 4.3,
           "serviceability": "SERVICEABLE",
           "slaString": "30-35 mins",
           "lastMileTravelString": "4.3 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-06 01:00:00",
           "opened": true
         },
         "badges": {
           
         },
         "isOpen": true,
         "aggregatedDiscountInfoV2": {
           
         },
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               
             }
           }
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "--"
           }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/namaste-3rd-sector-hsr-layout-rest241027",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     },
     {
       "info": {
         "id": "660675",
         "name": "Cafe Amudham",
         "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
         "locality": "5th Block Kormangala",
         "areaName": "Koramangala",
         "costForTwo": "₹200 for two",
         "cuisines": [
           "South Indian",
           "Snacks"
         ],
         "avgRating": 4.6,
         "parentId": "396620",
         "avgRatingString": "4.6",
         "totalRatingsString": "13K+",
         "sla": {
           "deliveryTime": 18,
           "lastMileTravel": 0.7,
           "serviceability": "SERVICEABLE",
           "slaString": "15-20 mins",
           "lastMileTravelString": "0.7 km",
           "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
           "nextCloseTime": "2024-11-05 23:59:00",
           "opened": true
         },
         "badges": {
           "textExtendedBadges": [
             {
               "iconId": "guiltfree/GF_Logo_android_3x",
               "shortDescription": "options available",
               "fontColor": "#7E808C"
             }
           ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
           "entityBadges": {
             "imageBased": {
               
             },
             "textBased": {
               
             },
             "textExtendedBadges": {
               "badgeObject": [
                 {
                   "attributes": {
                     "description": "",
                     "fontColor": "#7E808C",
                     "iconId": "guiltfree/GF_Logo_android_3x",
                     "shortDescription": "options available"
                   }
                 }
               ]
             }
           }
         },
         "aggregatedDiscountInfoV3": {
           "header": "₹100 OFF",
           "subHeader": "ABOVE ₹499",
           "discountTag": "FLAT DEAL"
         },
         "orderabilityCommunication": {
           "title": {
             
           },
           "subTitle": {
             
           },
           "message": {
             
           },
           "customIcon": {
             
           }
         },
         "differentiatedUi": {
           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
           "differentiatedUiMediaDetails": {
             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
             "lottie": {
               
             },
             "video": {
               
             }
           }
         },
         "reviewsSummary": {
           
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
           
         },
         "externalRatings": {
           "aggregatedRating": {
             "rating": "--"
           }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
       },
       "analytics": {
         "context": "seo-data-29975220-65ec-488e-82c2-c9c45ccd20bd"
       },
       "cta": {
         "link": "https://www.swiggy.com/city/bangalore/cafe-amudham-5th-block-kormangala-koramangala-rest660675",
         "text": "RESTAURANT_MENU",
         "type": "WEBLINK"
       },
       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
     }
   ]
//Body Component
const Body = () => {
     return (
          <div className="body">
               <div className="search">Search</div>
               <div className="res-container">
               {
                  resList.map((restaurant, index) => (
                       <RestaurantCard key={index} resData={restaurant} />  
                  ))
                 }      
               </div>

          </div>
     );
};
const AppLayout = () => {
     return (
          <div className ="app">
               <Header />
               <Body />
          </div>
     );
};

    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);  