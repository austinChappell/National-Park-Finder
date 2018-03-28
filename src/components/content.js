import React, {Component} from 'react';
import Filters from "./filters";
import ResultsContainer from './resultsContainer';
import '../loader.css'

let flex = {
    mainFlex: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    contentFlex: {
        flex: 1,
        display: 'flex',
        overflow: 'auto'
    },
    boxFlex: {
        display: 'flex',
        minHeight: 'min-content',
    },
    colFlex: {
        height: '40vh'
    }
}

let thumbnails = {
    states: [{
        AL: {
            parks: [
                {
                    'bicr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/5CB98FCB-1DD8-B71B-0BBCEFAF744A95BA.jpg?width=150mode=crop&quality=90'}
                    }
                },
                {
                    'frri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/57AD71FF-1DD8-B71B-0B7DA69E398FFDCC.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hobe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Horseshoe_Bend_NMP_DSC_0343_%285586613766%29.jpg/1024px-Horseshoe_Bend_NMP_DSC_0343_%285586613766%29.jpg'}
                    }
                },
                {
                    'liri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/BF3DC57F-1DD8-B71B-0B5B3A3CCE02CD16.JPG?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'mush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/4B5C706B-1DD8-B71B-0B42233718681484.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://www.nps.gov/natr/planyourvisit/images/Riding_the_NATT_200x285.jpg?width=150'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://drive.google.com/uc?id=10MKxjVbEtVR2k4pvA_Qo6XKaWoLHTwoT'}
                    }
                },
                {
                    'ruca': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/akr/park/ruca/2BC27F26-1DD8-B71C-0754461796E9CD4F/2BC27F26-1DD8-B71C-0754461796E9CD4F.jpg'}
                    }
                },
                {
                    'semo': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/347BFE79-1DD8-B71C-07B1C74A08223ABB/proxy/hires/'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }
                },
                {
                    'tuai': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/D5D382F9-1DD8-B71B-0BD119966CF5648F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'tuin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/074F06D8-1DD8-B71B-0B461E3882FF1377.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        AK: {
            parks: [
                {
                    'alag': {
                        images: {url: 'https://c1.staticflickr.com/5/4566/38263427842_18f49aaa5f_b.jpg'}
                    }
                },
                {
                    'anch': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'aleu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'ania': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cakr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'dena': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'gaar': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'glba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'inup': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'katm': {
                        images: {url: 'https://www.nps.gov/katm/blogs/images/814_070506_01-688-px.jpg'}
                    }
                },
                {
                    'kefj': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Kenai_Fjords_National_Park_3.jpg/1024px-Kenai_Fjords_National_Park_3.jpg'}
                    }
                },
                {
                    'klgo': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160713/articles/0211A8E0-1DD8-B71B-0B6C83D7D2164269/0211A8E0-1DD8-B71B-0B6C83D7D2164269.JPG'}
                    }
                },
                {
                    'kova': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lacl': {
                        images: {url: 'https://www.nps.gov/lacl/planyourvisit/images/Plan-Your-Visit-Index-Page_-1200w_-Kayak-on-Upper-Twin_4.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'noat': {
                        images: {url: 'https://www.nps.gov/noat/learn/photosmultimedia/images/photos-and-multimedia-noatak-national-preserve.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'sitk': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                },
                {
                    'wrst': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'yuch': {
                        images: {url: 'https://www.nps.gov/yuch/planyourvisit/images/Charley-River-Aerial-1-688x.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                }
            ]
        },
        AZ: {
            parks: [
                {
                    'cach': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/CACH-Antelope_House_26c8c41e1b75402c961e29fa1504511f.jpg/800px-CACH-Antelope_House_26c8c41e1b75402c961e29fa1504511f.jpg'}
                    }
                },
                {
                    'cagr': {
                        images: {url: 'https://c1.staticflickr.com/5/4677/28139489659_ffd6e223ef_b.jpg'}
                    }
                },
                {
                    'chir': {
                        images: {url: 'https://www.nps.gov/chir/learn/nature/images/20141001_0079.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'coro': {
                        images: {url: 'https://www.nps.gov/coro/planyourvisit/images/PicnicArea.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'fobo': {
                        images: {url: 'https://c1.staticflickr.com/8/7037/6889272989_e023b15818_b.jpg'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/glca/learn/news/images/GLCA-Iconic-Horseshoe-Bend-on-the-Colorado-River-in-Glen-Canyon-NRA.jpg'}
                    }
                },
                {
                    'grca': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/GRCA_NPS.jpg'}
                    }
                },
                {
                    'pima': {
                        images: {url: 'https://c1.staticflickr.com/6/5017/5446227123_70fab45c7d_b.jpg'}
                    }
                },
                {
                    'hutr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Hubbell_Trading_Post_01.jpg/1024px-Hubbell_Trading_Post_01.jpg'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://www.nps.gov/juba/learn/historyculture/images/Tumaca-cori-National-Historical-Park.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161205/articles/28906D76-1DD8-B71B-0B7F39D20AFB9357/28906D76-1DD8-B71B-0B7F39D20AFB9357.jpg'}
                    }
                },
                {
                    'moca': {
                        images: {url: 'https://c2.staticflickr.com/4/3459/3356706138_505b411aa5_b.jpg'}
                    }
                },
                {
                    'nava': {
                        images: {url: 'https://c1.staticflickr.com/9/8300/7860621352_56747ce843_b.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'orpi': {
                        images: {url: 'https://www.nps.gov/orpi/learn/nature/images/Scenery,_organ_pipes_and_mountaintop.JPG?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'para': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Shivwits_Plateau%2C_Grand_Canyon-Parashant_National_Monument%2C_Arizona_%286780630813%29.jpg/640px-Shivwits_Plateau%2C_Grand_Canyon-Parashant_National_Monument%2C_Arizona_%286780630813%29.jpg'}
                    }
                },
                {
                    'pefo': {
                        images: {url: 'https://www.nps.gov/subjects/geology/images/PEFO_Jasper_Forest_NPS_Photo_AdrewV_Kearns_1.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pisp': {
                        images: {url: 'https://www.nps.gov/pisp/planyourvisit/images/Fort-and-garden-resize.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sagu': {
                        images: {url: 'https://www.nps.gov/sagu/planyourvisit/images/Bolyard_NorthFromNearlyRinconPk100_0289_1.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sucr': {
                        images: {url: 'https://www.nps.gov/sucr/learn/photosmultimedia/images/BannerTop-of-SUCR-with-deposit-688x265_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'tont': {
                        images: {url: 'https://c1.staticflickr.com/8/7427/8718380241_1dce4c9988_b.jpg'}
                    }
                },
                {
                    'tuma': {
                        images: {url: 'https://www.nps.gov/tuma/learn/historyculture/images/3cTuma.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'tuzi': {
                        images: {url: 'https://www.nps.gov/tuzi/images/20101230-Case-Griffing-Tuzigoot-Snow-73_1.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waca': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/imr/park/waca/EEA3CEA7-155D-451F-67C271BDA7311C73/EEA3CEA7-155D-451F-67C271BDA7311C73.jpg'}
                    }
                },
                {
                    'wupa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Wupatki_National_Monument_WUPA2359.jpg/800px-Wupatki_National_Monument_WUPA2359.jpg'}
                    }
                },
                {
                    'yucr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Yuma_Territorial_Prison.JPG/1024px-Yuma_Territorial_Prison.JPG'}
                    }
                }
            ]
        },
        AR: {
            parks: [
                {
                    'arpo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/ARKANSAS_POST_NATIONAL_MEMORIAL.jpg/1024px-ARKANSAS_POST_NATIONAL_MEMORIAL.jpg'}
                    }
                },
                {
                    'buff': {
                        images: {url: 'https://www.nps.gov/buff/learn/news/images/terra-pic-steel-creek_1.jpg'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fort_Smith_National_Historic_Site_Parade_Grounds.jpg/640px-Fort_Smith_National_Historic_Site_Parade_Grounds.jpg'}
                    }
                },
                {
                    'hosp': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hot_Springs_National_Park_007.jpg/1024px-Hot_Springs_National_Park_007.jpg'}
                    }
                },
                {
                    'chsc': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Little_Rock_Central_High_School.jpg/1024px-Little_Rock_Central_High_School.jpg'}
                    }
                },
                {
                    'peri': {
                        images: {url: 'https://www.nps.gov/peri/planyourvisit/images/Virginia-s-web-photos-017.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wicl': {
                        images: {url: 'https://ridb.recreation.gov/images/82183.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/akr/park/liri/C42E21B7-1DD8-B71C-0706AB6D5BAA9514/C42E21B7-1DD8-B71C-0706AB6D5BAA9514.jpg' +
                            ''}
                    }
                }
            ]
        },
        CA: {
            parks: [
                {
                    'alca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/en/0/01/Alcatraz_Island_at_Sunset.jpg'}
                    }
                },
                {
                    'cabr': {
                        images: {url: 'https://www.nps.gov/cabr/learn/nature/images/Tidepools%2020140313%20DEZ.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'camo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Castle_Mountains_and_Joshua_Trees.jpg/1024px-Castle_Mountains_and_Joshua_Trees.jpg'}
                    }
                },
                {
                    'cech': {
                        images: {url: 'https://www.nps.gov/articles/images/CECH_Grave-Fountain_1.JPG?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'chis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Channel_Islands_10.jpg'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://www.nps.gov/deva/planyourvisit/images/Artists-Drive-North-Hill-01.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'depo': {
                        images: {url: 'https://www.nps.gov/articles/images/gri-photo-depo.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'euon': {
                        images: {url: 'https://www.nps.gov/subjects/culturallandscapes/images/960_EUON-orchard-and-Tao-House-March-2016.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fopo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fort_Point_National_Historic_Site_and_Golden_Gate_Bridge.jpg/1024px-Fort_Point_National_Historic_Site_and_Golden_Gate_Bridge.jpg'}
                    }
                },
                {
                    'goga': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GoldenGateBridge_BakerBeach_MC.jpg/1024px-GoldenGateBridge_BakerBeach_MC.jpg'}
                    }
                },
                {
                    'jomu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Martinez%2C_CA_USA_-_John_Muir_National_Historic_Site_-_panoramio.jpg/1024px-Martinez%2C_CA_USA_-_John_Muir_National_Historic_Site_-_panoramio.jpg'}
                    }
                },
                {
                    'jotr': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C87A0A9-1DD8-B71B-0B005528BDF99D1D.jpg?width=800&height=800&mode=crop&quality=90'}
                    }
                },
                {
                    'juba': {
                        images: {url: 'https://c1.staticflickr.com/5/4390/36343078640_0722732d28_b.jpg'}
                    }
                },
                {
                    'lavo': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/LAVO_NPS_1.jpg'}
                    }
                },
                {
                    'labe': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Labe_Cave_collapse_trench.JPG'}
                    }
                },
                {
                    'manz': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Manzanar_shrine.jpg/981px-Manzanar_shrine.jpg'}
                    }
                },
                {
                    'moja': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/MNP_Hole_in_Rock.jpg'}
                    }
                },
                {
                    'muwo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Muir_Woods_National_Monument.jpg/1024px-Muir_Woods_National_Monument.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'pinn': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Pinnacles_NM_10.jpg'}
                    }
                },
                {
                    'pore': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Point_Reyes_National_Seashore_PORE4292.jpg/1024px-Point_Reyes_National_Seashore_PORE4292.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'poch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Port_Chicago_Naval_Magazine_National_Memorial_POCH_0010.jpg/1020px-Port_Chicago_Naval_Magazine_National_Memorial_POCH_0010.jpg'}
                    }
                },
                {
                    'prsf': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Battery_Boutelle%2C_the_Presidio_of_San_Francisco.JPG/1024px-Battery_Boutelle%2C_the_Presidio_of_San_Francisco.JPG'}
                    }
                },
                {
                    'redw': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Redwood_National_Park_REDW9376.jpg/1024px-Redwood_National_Park_REDW9376.jpg'}
                    }
                },
                {
                    'rori': {
                        images: {url: 'https://www.nps.gov/rori/planyourvisit/images/Memorial_5.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'safr': {
                        images: {url: 'https://www.nps.gov/safr/learn/images/aerial_688_344px.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'samo': {
                        images: {url: 'https://www.nps.gov/samo/learn/news/images/Malibu-Creek-Acquisition-landscape-NPS-photo.JPG'}
                    }
                },
                {
                    'seki': {
                        images: {url: 'https://www.nps.gov/seki/learn/nature/images/FoxtailPineNPS_r.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'tule': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tule_Lake_camp_main.jpg/1280px-Tule_Lake_camp_main.jpg'}
                    }
                },
                {
                    'whis': {
                        images: {url: 'https://c1.staticflickr.com/1/81/218965142_37b0f8f8fe_z.jpg?zz=1p'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                },
                {
                    'yose': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Half_dome_at_sunset_in_Yosemite_National_Park._NPS-Damon_Joyce_%2818657742316%29.jpg/1024px-Half_dome_at_sunset_in_Yosemite_National_Park._NPS-Damon_Joyce_%2818657742316%29.jpg'}
                    }
                }
            ]
        },
        CO: {
            parks: [
                {
                    'beol': {
                        images: {url: 'https://www.nps.gov/articles/images/gri-photo-beol.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'blca': {
                        images: {url: 'https://c1.staticflickr.com/5/4556/26911336939_751b402e66_b.jpg'}
                    }
                },
                {
                    'cala': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cache_la_Poudre_River_in_Poudre_Canyon_shallow_Area.JPG/640px-Cache_la_Poudre_River_in_Poudre_Canyon_shallow_Area.JPG'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'colm': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rim_Rock_Drive_Colorado_National_Monument_Overlook.jpg/1024px-Rim_Rock_Drive_Colorado_National_Monument_Overlook.jpg'}
                    }
                },
                {
                    'cure': {
                        images: {url: 'https://ridb.recreation.gov/images/80661.jpg'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://ridb.recreation.gov/images/80832.jpg'}
                    }
                },
                {
                    'flfo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Florissant_Fossil_Beds_National_Monument_PA272516.jpg/1024px-Florissant_Fossil_Beds_National_Monument_PA272516.jpg'}
                    }
                },
                {
                    'grsa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Great_Sand_Dunes_National_Park_-_panoramio_%281%29.jpg'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161202/articles/8D6FD35E-1DD8-B71B-0B23EF61C353EC93/8D6FD35E-1DD8-B71B-0B23EF61C353EC93.jpg'}
                    }
                },
                {
                    'meve': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mesa_Verde_National_Park%2C_Cliff_Palace.jpg/800px-Mesa_Verde_National_Park%2C_Cliff_Palace.jpg'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://c1.staticflickr.com/5/4429/36692061386_74427d316d_b.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'romo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG/1024px-Rocky_Mountain_National_Park_in_September_2011_-_Glacier_Gorge_from_Bear_Lake.JPG'}
                    }
                },
                {
                    'sand': {
                        images: {url: 'https://ridb.recreation.gov/images/82337.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'yuho': {
                        images: {url: 'https://www.nps.gov/yuho/learn/nature/images/yuho_cattails-with-mesa-behind_md_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                }
            ]
        },
        CT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'colt': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Good_Shepherd_Parish_House_Hartford_CT.JPG/640px-Good_Shepherd_Parish_House_Hartford_CT.JPG'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/4FB5EB24-1DD8-B71B-0B761A2EC456D27D.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/76FCD872-1DD8-B71B-0B3067681A42674E.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'wefa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Weir_Farm_National_Historic_Site_-_studios.jpg/800px-Weir_Farm_National_Historic_Site_-_studios.jpg'}
                    }
                }
            ]
        },
        DE: {
            parks: [
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/B33B9F02-1DD8-B71B-0B699BA0628152F2.JPG?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20160502/articles/79DD07C3-1DD8-B71B-0BEA6A790BA0A815/79DD07C3-1DD8-B71B-0BEA6A790BA0A815.JPG'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/ner/crop16_9/8F96B982-1DD8-B71B-0B7907531084E975.jpg?width=950&quality=90&mode=crop'}
                    }
                }
            ]
        },
        FL: {
            parks: [
                {
                    'bicy': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Big_Cypress_National_Preserve.jpg/1024px-Big_Cypress_National_Preserve.jpg'}
                    }
                },
                {
                    'bisc': {
                        images: {url: 'https://www.nps.gov/bisc/learn/nature/images/turtle-swimming_1.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cana': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/CanaveralNationalSeashore1.jpg/640px-CanaveralNationalSeashore1.jpg'}
                    }
                },
                {
                    'casa': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Castillo_de_San_Marcos_National_Monument.JPG/640px-Castillo_de_San_Marcos_National_Monument.JPG'}
                    }
                },
                {
                    'deso': {
                        images: {url: 'https://www.nps.gov/deso/learn/news/images/Gumbo-Limbo-tree-at-DESO-for-web.jpg'}
                    }
                },
                {
                    'drto': {
                        images: {url: 'https://c1.staticflickr.com/3/2908/13966421530_fb95260d2b_b.jpg'}
                    }
                },
                {
                    'ever': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gfp-florida-everglades-national-park-alligators-floating.jpg/1024px-Gfp-florida-everglades-national-park-alligators-floating.jpg'}
                    }
                },
                {
                    'foma': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ft_Matanzas_2008.JPG/640px-Ft_Matanzas_2008.JPG'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Gulf_Islands_NS.jpg'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'timu': {
                        images: {url: 'https://www.nps.gov/common/uploads/teachers/assets/images/akr/park/timu/3074F52E-1DD8-B71C-07756C968C27412F/3074F52E-1DD8-B71C-07756C968C27412F.jpg'}
                    }
                }
            ]
        },
        GA: {
            parks: [
                {
                    'ande': {
                        images: {url: 'https://ridb.recreation.gov/images/80548.jpg'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://science.nature.nps.gov/im/units/netn/assets/images/East%20MT_SDF.JPG'}
                    }
                },
                {
                    'armo': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/125093E7-1DD8-B71B-0B3DAC0A86F71DB2.jpg'}
                    }
                },
                {
                    'auca': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Savannah_River_Augusta_Canal_Riverwatch_Pkwy.jpg/800px-Savannah_River_Augusta_Canal_Riverwatch_Pkwy.jpg'}
                    }
                },
                {
                    'chat': {
                        images: {url: 'https://www.nps.gov/rlc/ogbfrec/images/chatriver3.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg/1024px-Chickamauga_and_Chattanooga_National_Military_Park_35640891205.jpg'}
                    }
                },
                {
                    'cuis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/50F8D148-1DD8-B71B-0BE76BD99679DF9A.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'fofr': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Fort_Frederica_National_Monument_%2864%29.jpg/1024px-Fort_Frederica_National_Monument_%2864%29.jpg'}
                    }
                },
                {
                    'fopu': {
                        images: {url: 'https://ridb.recreation.gov/images/82896.jpg'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3FBCE71F-1DD8-B71B-0BA0D66EBB68BC88.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'jica': {
                        images: {url: 'https://www.nps.gov/common/uploads/banner_image/akr/homepage/A9392F75-1DD8-B71B-0B76D328B0FF24F4.jpg?width=2400&height=700&mode=crop&quality=90'}
                    }
                },
                {
                    'kemo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5D7825D5-1DD8-B71B-0B8FF7F0B312AED7.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'malu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/657DCEA3-1DD8-B71B-0B9200567CF68182.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'ocmu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/12C248FC-1DD8-B71B-0BC1808F8185BCD5.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }
                }
            ]
        },
        HI: {
            parks: [
                {
                    'alka': {
                        images: {url: 'https://www.nps.gov/common/uploads/photogallery/pwr/park/alka/00BDD487-C316-B1AF-398C1DAEA53FFC57/00BDD487-C316-B1AF-398C1DAEA53FFC57-large.JPG'}
                    }
                },
                {
                    'hale': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Haleakala_National_Park_03.jpg/1024px-Haleakala_National_Park_03.jpg'}
                    }
                },
                {
                    'havo': {
                        images: {url: 'https://www.nps.gov/havo/planyourvisit/images/20170831_surface_flow.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/EB51E872-1DD8-B71B-0B463374AE35E985.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'kala': {
                        images: {url: 'https://www.nps.gov/kala/learn/images/Kalawao_Sunrise_web_1.jpg'}
                    }
                },
                {
                    'kaho': {
                        images: {url: 'https://c1.staticflickr.com/8/7647/26820498502_6eaa308757_b.jpg'}
                    }
                },
                {
                    'puho': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Pu%27uhonua_o_Honaunau_National_Historical_Park%2C_Honaunau%2C_Hawaii_%2812%29_%284529067475%29.jpg/640px-Pu%27uhonua_o_Honaunau_National_Historical_Park%2C_Honaunau%2C_Hawaii_%2812%29_%284529067475%29.jpg'}
                    }
                },
                {
                    'puhe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/18F8E1EF-1DD8-B71B-0B9EF98DD469D5A9.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'valr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=200&quality=90&mode=crop'}
                    }
                }
            ]
        },
        ID: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'ciro': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Morning_Glory_Spire%2C_City_of_Rocks_NR.jpg/1024px-Morning_Glory_Spire%2C_City_of_Rocks_NR.jpg'}
                    }
                },
                {
                    'crmo': {
                        images: {url: 'https://c1.staticflickr.com/8/7601/16400385443_ccd2b2abf2_b.jpg'}
                    }
                },
                {
                    'hafo': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161020/articles/EAA33DE0-1DD8-B71B-0B671ECDABBD1635/EAA33DE0-1DD8-B71B-0B671ECDABBD1635.jpg'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/laro/learn/nature/images/dryfalls.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/A6EC2301-1DD8-B71B-0B9A51F3CABF84AB.jpg?width=950&quality=90&mode=crop'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/nepe/learn/historyculture/images/Coyote-s-Fishnet_cropped.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://c1.staticflickr.com/3/2941/15266522767_f84d221308_b.jpg'}
                    }
                }
            ]
        },
        IL: {
            parks: [
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'liho': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lincoln_Home_1.jpg/1024px-Lincoln_Home_1.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                },
                {
                    'pull': {
                        images: {url: 'https://c1.staticflickr.com/5/4307/35909386626_3aa83f208d_b.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }
                }
            ]
        },
        IN: {
            parks: [
                {
                    'gero': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/George_Rogers_Clark_National_Historical_Park_1.jpg/1024px-George_Rogers_Clark_National_Historical_Park_1.jpg'}
                    }
                },
                {
                    'indu': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Gfp-indiana-dunes-national-lakeshore-lakeshore.jpg/1024px-Gfp-indiana-dunes-national-lakeshore-lakeshore.jpg'}
                    }
                },
                {
                    'libo': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lincoln_Boyhood_National_Memorial_LIBO4422.jpg/1024px-Lincoln_Boyhood_National_Memorial_LIBO4422.jpg'}
                    }
                }
            ]
        },
        IA: {
            parks: [
                {
                    'efmo': {
                        images: {url: 'https://www.nps.gov/orgs/1563/images/EFMO_NPS_photo_1.jpg'}
                    }
                },
                {
                    'heho': {
                        images: {url: 'https://www.nps.gov/heho/learn/historyculture/images/heho_friends_meetinghouse.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://ridb.recreation.gov/images/81833.jpg'}
                    }
                }
            ]
        },
        KS: {
            parks: [
                {
                    'brvb': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Monroe_School_Brown_v._Board_of_Education_IMG_5326.jpg/640px-Monroe_School_Brown_v._Board_of_Education_IMG_5326.jpg'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://ridb.recreation.gov/images/80246.jpg'}
                    }
                },
                {
                    'fols': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Santa_Fe_Trail_Wagon_at_the_Fort_Larned_Historic_Site.jpg/1024px-Santa_Fe_Trail_Wagon_at_the_Fort_Larned_Historic_Site.jpg'}
                    }
                },
                {
                    'fosc': {
                        images: {url: 'https://ridb.recreation.gov/images/81005.jpg'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://c1.staticflickr.com/5/4430/36572261342_54377de201_b.jpg'}
                    }
                },
                {
                    'nico': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Nicodemus_National_Historic_Site_AMECHU-1.jpg/640px-Nicodemus_National_Historic_Site_AMECHU-1.jpg'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg/635px-Oregon_National_Historic_Trail_in_Wyoming_%2815800827938%29.jpg'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://ridb.recreation.gov/images/82168.jpg'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/5A51E5F1-1DD8-B71B-0B1742C03F90801A.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'tapr': {
                        images: {url: 'https://c1.staticflickr.com/6/5674/23160584795_09d8cafa59_b.jpg'}
                    }
                }
            ]
        },
        KY: {
            parks: [
                {
                    'abli': {
                        images: {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Abraham_Lincoln_Birthplace_National_Historical_Park_ABLI4421.jpg/1024px-Abraham_Lincoln_Birthplace_National_Historical_Park_ABLI4421.jpg'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161020/articles/E93D92F9-1DD8-B71B-0B20733E1CD3521C/E93D92F9-1DD8-B71B-0B20733E1CD3521C.jpg'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C48EF8C0-1DD8-B71B-0B1CCA8A575B0FC0.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/4D864C4D-1DD8-B71B-0B0A61067B208560.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'maca': {
                        images: {url: 'https://www.nps.gov/common/uploads/stories/images/nri/20161018/articles/81A29272-1DD8-B71B-0B59F61D969414CF/81A29272-1DD8-B71B-0B59F61D969414CF.jpg'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/5CB488EB-155D-451F-67AFDFC9DEBE3052/Thumb/XLarge?'}
                    }
                }
            ]
        },
        LA: {
            parks: [
                {
                    'attr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cari': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'crha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'jela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jazz': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'popo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        ME: {
            parks: [
                {
                    'acad': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'kaww': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'maac': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'roca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sacr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        MD: {
            parks: [
                {
                    'anti': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'balt': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bawa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cato': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'clba': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fofo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fomc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'fowa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'glec': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'gree': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hamp': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'haha': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'hatu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'mono': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'oxhi': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'pisc': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'thst': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MA: {
            parks: [
                {
                    'adam': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'blrv': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'boaf': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'boha': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'bost': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'caco': {
                        images: {url: 'https://www.nps.gov/dena/planyourvisit/images/Denali_EM_03.jpg?maxwidth=1200&maxheight=1200&autorotate=false'}
                    }
                },
                {
                    'esse': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'frla': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/5160B968-1DD8-B71B-0B605DAFABB84CBF.jpg?width=307&quality=90&mode=crop'}
                    }
                },
                {
                    'jofi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop1_1/C2A500E0-1DD8-B71B-0BB496B34A45EA70.jpg?width=150&mode=crop&quality=90'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://www.nps.gov/common/uploads/structured_data/3C7A32DB-1DD8-B71B-0B37F66E9D0832AF.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'long': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/CD22352B-1DD8-B71B-0BC867B506B4AF1C.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'lowe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/77491BBF-1DD8-B71B-0BDFAFFAA560A56F.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'mima': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6CF4FA58-1DD8-B71B-0BEBB8C9680A2589.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'nebe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'neen': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/C1889703-1DD8-B71B-0B26EBC0A3CD3754.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'sama': {
                        images: {url: 'https://www.nps.gov/npgallery/GetAsset/331647AF-1DD8-B71C-070A844A8F3BA10F/proxy/hires/'}
                    }
                },
                {
                    'sair': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/B0B670E4-1DD8-B71B-0B5C986C85055926.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'spar': {
                        images: {url: 'https://drive.google.com/uc?id=18DtZrTwL5d5dYTfj49fROP9Z7SC8aOCU'}
                    }
                },
                {
                    'qush': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/FBEB4E20-1DD8-B71B-0B5C1720B823BCE0.jpg?width=150&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/3F64F4C4-1DD8-B71B-0B168E05C9966BCC.jpg?width=150&quality=90&mode=crop'}
                    }
                }
            ]
        },
        MI: {
            parks: [
                {
                    'isro': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'kewe': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'auto': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'piro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'rira': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'slbe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        MN: {
            parks: [
                {
                    'grpo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'miss': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pipe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'voya': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MS: {
            parks: [
                {
                    'brcr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'guis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mide': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'migu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mihi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'natc': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'tupe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'vick': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MO: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'jeff': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'gwca': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'hstr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'ozar': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'ulsg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wicr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        MT: {
            parks: [
                {
                    'biho': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'bica': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fous': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'glac': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'grko': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'libi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NE: {
            parks: [
                {
                    'agfo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'home': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'niob': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'scbl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NV: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'deva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'grba': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'lake': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'tusk': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NH: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'saga': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                }
            ]
        },
        NJ: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'xrds': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'greg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'morr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'neje': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pine': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'pagr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'edis': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NM: {
            parks: [
                {
                    'azru': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'band': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cavo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cave': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'chcu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elma': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elmo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'foun': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'gicl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'norg': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'peco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'petr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'sapu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'vall': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whsa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        NY: {
            parks: [
                {
                    'afbg': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cacl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'elro': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'elis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'erie': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'feha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fiis': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fost': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gate': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gegr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gois': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hagr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hart': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hofr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hurv': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'loea': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mava': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'npnh': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'nifa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sahi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'sapa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'sara': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'stli': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'ston': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'thrb': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'thri': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'thco': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'vama': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wori': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        NC: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blrn': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'caha': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'calo': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'carl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'fora': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'guco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mocr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wrbr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        ND: {
            parks: [
                {
                    'fous': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'knri': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'thro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        OH: {
            parks: [
                {
                    'chyo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cuva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'dabe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'daav': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fati': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fila': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'hocu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jaga': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'avia': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pevi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'wiho': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        OK: {
            parks: [
                {
                    'chic': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'fosm': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'okci': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'safe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waba': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        OR: {
            parks: [
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'crla': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'joda': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'orca': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                }
            ]
        },
        PA: {
            parks: [
                {
                    'alpo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'dele': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'dela': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'dewa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'edal': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'eise': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'frst': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'flni': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fone': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'frhi': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gett': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'glde': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'hofu': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'inde': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'jofl': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'lode': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oire': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rist': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'scrv': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'stea': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'thko': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'upde': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'vafo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        RI: {
            parks: [
                {
                    'blrv': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blac': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'rowi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'tosy': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        SC: {
            parks: [
                {
                    'chpi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cong': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cowp': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fosu': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'guge': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'kimo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'nisi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'reer': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'soca': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        SD: {
            parks: [
                {
                    'badl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'jeca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'mimi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mnrr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'moru': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'wica': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                }
            ]
        },
        TN: {
            parks: [
                {
                    'anjo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'appa': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'biso': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'chch': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fodo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'grsm': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'natt': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'natr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'obed': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'shil': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'stri': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'tecw': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'trte': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        TX: {
            parks: [
                {
                    'alfl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'amis': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'bibe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'bith': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cham': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'elte': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'elca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'foda': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'gumo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'lamr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lyjo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'pais': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'paal': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'rigr': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'saan': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waco': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        UT: {
            parks: [
                {
                    'arch': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'brca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cany': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'care': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'cebr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'dino': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'glca': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'gosp': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'hove': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'nabr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'olsp': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rabr': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'tica': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'zion': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        VT: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'chva': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mabi': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                }
            ]
        },
        VA: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'apco': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'arho': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'asis': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'blri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'bowa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'came': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cajo': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cebe': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cwdw': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'clmo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'colo': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'cuga': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'fomr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'frsp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'gewa': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'gwmp': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'grfa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'grsp': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'jame': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'mawa': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'mana': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'ovvi': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'pete': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'pohe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'prwi': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'rich': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'shen': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'shvb': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'stsp': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'waro': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'wotr': {
                        images: {url: 'https://www.nps.gov/bela/planyourvisit/images/imurukvolcanic.jpg?maxwidth=650&autorotate=false'}
                    }
                },
                {
                    'york': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        WA: {
            parks: [
                {
                    'ebla': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'fova': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'iafl': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'klse': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'laro': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'lecl': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'lewi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'mapr': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'miin': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'mora': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'nepe': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'noca': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'olym': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'sajh': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whmi': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'wing': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        WV: {
            parks: [
                {
                    'appa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'blue': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'choh': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'cbpo': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'cbgn': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'coal': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'gari': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'hafe': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'jthg': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'neri': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'whee': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        WI: {
            parks: [
                {
                    'apis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'iatr': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'noco': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'sacn': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                }
            ]
        },
        WY: {
            parks: [
                {
                    'bica': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'cali': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'deto': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'fola': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'fobu': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                },
                {
                    'grte': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'mopi': {
                        images: {url: 'https://drive.google.com/uc?id=1MRgswhNe1_sDMTXd8vXjDWPLfik91A55'}
                    }
                },
                {
                    'oreg': {
                        images: {url: 'https://www.nps.gov/cakr/learn/historyculture/images/beach-ridges.jpg?maxwidth=1200&autorotate=false'}
                    }
                },
                {
                    'poex': {
                        images: {url: 'https://drive.google.com/uc?id=1py4pLxFWAY71XOGVGMOkXJbTqK32w8DT'}
                    }
                },
                {
                    'yell': {
                        images: {url: 'https://www.nps.gov/common/uploads/grid_builder/akr/crop16_9/6B538158-1DD8-B71B-0B4E0ACD12D0C2FF.jpg?width=465&quality=90&mode=crop'}
                    }
                }
            ]
        },
        GU: {
            parks: [
                {
                    'wapa': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        PR: {
            parks: [
                {
                    'saju': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        },
        VI: {
            parks: [
                {
                    'buis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'chri': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'sari': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'vicr': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                },
                {
                    'viis': {
                        images: {url: 'https://www.nps.gov/cach/planyourvisit/images/DSC_5579.JPG?xwidth=150'}
                    }
                }
            ]
        }
    }]
}

class Content extends Component {

    liftLocationChange({target}) {
        this.props.handleChangeLocation(target.value)
    }

    render() {
        return (
                <div className="row">
                    <div className="col-3" style={{
                        display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Filters flex={flex} onChange={this.liftLocationChange.bind(this)}
                                 handleChangeLocation={this.props.handleChangeLocation}
                                 location={this.props.location}
                                 style={this.props.style}/>
                    </div>
                    <div className="col-9">
                        <h2 style={{
                            color: this.props.style.colors.white,
                            fontSize: '1em',
                            margin: '50px 20px 30px 0',
                            float: 'right'
                        }}>

                            {this.props.serverData.parks && this.props.serverData.parks.length} Results Found</h2>

                        < ResultsContainer thumbnail={thumbnails.states[0]} location={this.props.location}
                                           parks={this.props.serverData.parks} style={this.props.style}/>
                    </div>
                </div>
        );
    };
}

export default Content;