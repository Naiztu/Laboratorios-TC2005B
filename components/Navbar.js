import React from "react";
import Link from 'next/link';


const labs=[1,2,3,4,5,6,7,8,9]

function Navbar() {
  return (
    <>
      <nav
        className="fixed navbar bg-neutral text-neutral-content z-40 font-bold"
      >
        <div className="flex-1">
          <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">
            <svg
              version="1.1"
              viewBox="0 0 195 52"
              height="42px"
              width="195px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              className="logo w-32"
              fill="white"
            >
              <g fillRule="evenodd" strokeWidth={1} stroke="none" id="Page-1">
                <g
                  transform="translate(-70.000000, -71.000000)"
                  id="header-left"
                >
                  <g
                    transform="translate(0.000000, 50.000000)"
                    id="Menu-principal"
                  >
                    <g transform="translate(70.000000, 21.000000)" id="logo">
                      <path
                        id="imagotipo"
                        d="M37.2224411 19.7850593C35.5767028 21.4279561 32.3139817 24.5353663 29.6972321 27.1246479 23.5194232 32.7452544 23.4206618 36.3677295 23.7528904 38.064754 19.2052439 32.7483183 22.8120039 28.7643106 25.1252804 26.5083063 26.1863237 25.4679639 32.7405214 19.0444621 34.2414553 17.617736 39.5492395 12.5688752 39.547699 11.0577234 39.547699 11.0577234 41.5648624 15.8054772 38.8666389 18.1448859 37.2224411 19.7850593L37.2224411 19.7850593ZM37.0649706 27.6635425C35.4495282 29.2392052 36.0980672 28.6082252 33.4808041 31.1622727 29.2237935 35.3059402 29.1996594 38.064754 29.1996594 38.064754 26.8237371 35.4693448 28.2820512 31.1549535 30.8371819 28.6660977 31.8983964 27.6293297 33.8744805 25.7653261 35.2821302 24.435281 38.1581927 21.7203822 39.0564594 20.9256573 39.4634865 19.8783361 40.5645821 24.4298342 38.1450131 26.5139233 37.0649706 27.6635425L37.0649706 27.6635425ZM19.4460711 24.3854086C20.6253886 23.249917 28.1324542 15.9035199 29.5656073 14.5167939 34.2168078 10.0124448 34.0074746 8.59814419 34.0074746 8.59814419 36.0159087 13.3453874 33.263084 15.9396051 31.6075894 17.5676934 29.8040382 19.3421648 25.238933 23.8056628 22.609175 26.3779231 16.0058534 32.8361482 18.3725329 38.0635625 18.3725329 38.0635625 14.1798798 34.972663 15.1202527 28.5895018 19.4460711 24.3854086L19.4460711 24.3854086ZM16.7052279 19.3164627C17.8922477 18.1503328 24.2699757 11.9275123 26.4290338 9.83797636 30.9629871 5.44818069 30.7000798 3.70417733 30.9051338 2.7897926 34.081075 6.03082011 32.1316924 9.31933707 30.4089305 11.0272552 28.8997808 12.5235985 21.8178856 19.6383356 18.9389133 22.2495747 18.2054772 22.9151079 13.4377143 27.2649035 13.7483762 31.2964006 11.0876376 27.945075 11.8032728 23.6977477 16.7052279 19.3164627L16.7052279 19.3164627ZM10.875737 17.5377358C11.9444827 16.4308401 20.0519904 8.56410157 21.4266055 7.1877585 24.7805568 3.83864568 24.1172978 1.13838517 24.1172978 1.13838517 27.9986042 4.07575252 26.5712707 7.2475033 24.4654446 9.27593273 22.7568892 10.930404 16.7024893 16.9867561 13.9056756 19.6539952 9.46671804 23.8958757 10.0057123 27.3988612 10.8454411 30.3966542 7.59264746 27.0752861 6.11636115 22.4689794 10.875737 17.5377358L10.875737 17.5377358ZM24.2718585 0.0905533656C10.8666654 0.0905533656 1.42108547e-14 10.896872 1.42108547e-14 24.2274508 1.42108547e-14 36.5360702 9.26560077 46.6921749 21.2395237 48.1764331L21.2395237 44.7594052C17.2389161 44.1612764 13.2472091 42.8136993 10.5871552 39.1839051L37.9558772 39.1839051C35.2953098 42.8136993 31.3041163 44.1612764 27.3035087 44.7594052L27.3035087 48.1764331C39.2774316 46.6921749 48.5430324 36.5360702 48.5430324 24.2274508 48.5430324 10.896872 37.6760247 0.0905533656 24.2718585 0.0905533656L24.2718585 0.0905533656Z"
                      />
                      <g transform="translate(55.000000, 4.000000)" id="texto">
                        <path
                          id="Fill-2"
                          d="M16.4363391 10.8265817C17.6028192 10.8265817 18.7176079 10.8008795 19.9092491 10.7503262 20.3150781 10.7503262 20.4670714 10.6497303 20.4670714 10.2463253 20.4670714 8.96070577 19.8075779 7.70078845 18.667457 7.70078845 17.6278091 7.70078845 16.6648425 8.83457787 16.4363391 10.8265817L16.4363391 10.8265817ZM23.1284947 15.7663359C21.5825448 17.9088081 19.6812592 18.412809 18.7176079 18.412809 15.4482114 18.412809 13.5982749 15.9173149 13.5982749 13.0190966 13.5982749 11.1532206 14.3325669 9.59100485 15.3978893 8.53227941 16.4878593 7.39849 17.8816447 6.71763763 19.1994335 6.71763763L19.2251081 6.71763763C21.4808736 6.71763763 23.2296524 8.65840732 23.2296524 10.6754325 23.2296524 11.1789228 23.0776591 11.4561999 22.5449978 11.5567959 22.1146925 11.6073492 18.9971181 11.8590943 16.3100203 11.9602009 16.386017 14.9348449 18.0587991 16.3210603 19.8584135 16.3210603 20.8470546 16.3210603 21.8100212 15.9680384 22.6975046 15.1615688L23.1284947 15.7663359 23.1284947 15.7663359Z"
                        />
                        <path
                          id="Fill-3"
                          d="M34.2050066 15.7413146C33.064201 17.3035303 31.3909054 18.412809 29.8709724 18.412809 26.4997335 18.412809 24.5222801 15.8168892 24.5222801 13.0946712 24.5222801 11.2044548 25.4349246 9.46470674 27.0820322 8.22981075 28.6033345 7.09602133 30.2251099 6.71763763 31.1887612 6.71763763L31.213751 6.71763763C32.1515566 6.71763763 32.9883756 7.02044672 33.4186809 7.3477665 33.7740166 7.62521384 33.8751743 7.87695901 33.8751743 8.22981075 33.8501844 8.8856418 33.2420401 9.49040892 32.8613721 9.49040892 32.7093788 9.49040892 32.556872 9.4148343 32.3287109 9.21245093 31.3909054 8.38113019 30.5549422 8.00308691 29.76913 8.00308691 28.5273379 8.00308691 27.2855457 9.13738696 27.2855457 11.8090517 27.2855457 15.2116114 29.6931334 16.3210603 30.9097644 16.3210603 31.9745734 16.3210603 32.7345399 16.0441236 33.7483421 15.1615688L34.2050066 15.7413146"
                        />
                        <path
                          id="Fill-4"
                          d="M42.1384409 18.1105106L42.1384409 17.3547645C43.355072 17.2029344 43.5070653 17.0768065 43.5070653 15.312718L43.5070653 11.0533055C43.5070653 9.26368508 42.7470987 8.50657724 41.5554576 8.50657724 40.77033 8.50657724 40.0605144 8.91015248 39.3500142 9.46470674L39.3500142 15.4895694C39.3500142 17.1023384 39.5028633 17.2029344 40.6931352 17.3547645L40.6931352 18.1105106 34.8136645 18.1105106 34.8136645 17.3547645C36.4356111 17.1523811 36.5624433 17.0768065 36.5624433 15.4133139L36.5624433 10.1962826C36.5624433 8.65840732 36.4356111 8.55781138 35.1428122 8.30538536L35.1428122 7.65023517C36.485762 7.44853265 37.9820745 7.12053202 39.3500142 6.66691413L39.3500142 8.58334334C39.8570009 8.22981075 40.3896621 7.82640572 40.9724742 7.44853265 41.7074509 6.96938279 42.2645885 6.71763763 43.0002498 6.71763763 45.0278541 6.71763763 46.295492 8.17993831 46.295492 10.6754325L46.295492 15.4895694C46.295492 17.1023384 46.4474853 17.1780833 47.8167943 17.3547645L47.8167943 18.1105106 42.1384409 18.1105106"
                        />
                        <path
                          id="Fill-5"
                          d="M51.9983218 11.9353498C51.9983218 15.0604622 53.1389562 17.4802115 54.9134096 17.4802115 56.1050507 17.4802115 57.219326 16.6739121 57.219326 13.0441179 57.219326 9.76717541 56.2062085 7.65023517 54.3557585 7.65023517 53.1389562 7.65023517 51.9983218 9.06130171 51.9983218 11.9353498L51.9983218 11.9353498ZM60.3882494 12.3637761C60.3882494 16.4221669 57.4480006 18.412809 54.634584 18.412809 50.8323551 18.412809 48.8299118 15.5899951 48.8299118 12.8172238 48.8299118 8.73398193 52.0491574 6.71763763 54.7357417 6.71763763 58.1068094 6.71763763 60.3882494 9.31372773 60.3882494 12.3637761L60.3882494 12.3637761Z"
                        />
                        <path
                          id="Fill-6"
                          d="M61.098065 18.1105106L61.098065 17.3547645C62.6440149 17.1523811 62.8216827 17.0267638 62.8216827 15.3882926L62.8216827 3.71797229C62.8216827 2.10520323 62.6941658 2.05464994 61.1992227 1.87813896L61.1992227 1.1974568C62.6188538 1.04630757 64.3933072 0.668604721 65.6094248 0.315582765L65.6094248 15.3882926C65.6094248 17.0768065 65.7870926 17.2029344 67.3587171 17.3547645L67.3587171 18.1105106 61.098065 18.1105106"
                        />
                        <path
                          id="Fill-7"
                          d="M73.1633893 5.40699681C73.5685336 4.32273941 74.4051814 1.80256435 74.5830204 1.32341449 74.8354868 1.17226526 76.7110978 0.970562748 77.0917657 1.04630757L77.218598 1.29856338 73.9233558 5.7344868 73.1633893 5.40699681 73.1633893 5.40699681ZM71.4397715 11.9353498C71.4397715 15.0604622 72.5798924 17.4802115 74.3543458 17.4802115 75.5453023 17.4802115 76.6607757 16.6739121 76.6607757 13.0441179 76.6607757 9.76717541 75.6469735 7.65023517 73.7965235 7.65023517 72.5798924 7.65023517 71.4397715 9.06130171 71.4397715 11.9353498L71.4397715 11.9353498ZM79.828501 12.3637761C79.828501 16.4221669 76.8887657 18.412809 74.0753491 18.412809 70.2732914 18.412809 68.2708481 15.5899951 68.2708481 12.8172238 68.2708481 8.73398193 71.4899225 6.71763763 74.1771914 6.71763763 77.5484303 6.71763763 79.828501 9.31372773 79.828501 12.3637761L79.828501 12.3637761Z"
                        />
                        <path
                          id="Fill-8"
                          d="M84.4673777 10.4730491C84.4673777 12.3132229 85.1771933 13.7248 86.44466 13.7248 87.4584621 13.7248 88.1682777 12.7161172 88.1682777 10.8008795 88.1682777 9.03696124 87.4843078 7.59968188 86.1658344 7.59968188 85.3038544 7.59968188 84.4673777 8.58334334 84.4673777 10.4730491L84.4673777 10.4730491ZM84.3410589 19.0688103C83.8594045 19.496726 83.5552467 20.000727 83.5552467 20.6060048 83.5552467 21.8909434 84.8730355 23.0259243 86.8498043 23.0259243 88.9284154 23.0259243 90.0942109 21.9164754 90.0942109 20.5048982 90.0942109 19.5978326 89.5363886 19.0432783 88.7764221 18.791363 88.1169286 18.5896605 87.5087842 18.5391072 86.4949821 18.5391072 85.278351 18.5391072 84.7210422 18.690767 84.3410589 19.0688103L84.3410589 19.0688103ZM92.705312 7.2216386C92.5276442 7.65023517 92.0458186 8.40615151 91.6155132 8.68325843L90.1450465 8.58334334C90.5760365 9.11253585 90.854862 9.76717541 90.854862 10.6241983 90.854862 13.2963737 88.5225864 14.6068443 86.1658344 14.6068443 85.7350155 14.6068443 85.3038544 14.5312697 84.8981966 14.4813972 84.6450456 14.6825891 84.3912099 15.0104195 84.3912099 15.312718 84.3912099 15.7413146 84.8227134 16.2708475 86.0131564 16.2453155 86.87565 16.2453155 87.6607775 16.2197836 88.4722643 16.2197836 90.0438888 16.2197836 92.2738085 16.6739121 92.2738085 19.2443 92.2738085 22.0427735 89.0552476 24.3864376 85.6840088 24.3864376 82.5917666 24.3864376 81.0961388 22.7236258 81.0709778 21.3118785 81.0709778 20.7323029 81.3498033 20.3037063 81.8059544 19.9001311 82.3894512 19.3961301 83.1495889 18.8919589 83.7575621 18.4633623 82.7694345 18.1362128 82.2117834 17.631531 81.8819511 17.0768065 81.6281154 16.6989334 81.5019678 16.1447196 81.5271289 15.8417403 82.7435888 15.3882926 83.5552467 14.7081211 83.9860656 14.2289712 82.5917666 13.7498214 81.603639 12.4893934 81.603639 10.8766243 81.603639 8.02810823 84.2142267 6.71763763 86.3686633 6.71763763L86.3938244 6.71763763C87.3567909 6.71763763 88.1169286 6.94436147 89.004412 7.37278782 90.2718787 7.32291539 91.5898387 7.17108531 92.5784798 7.04546804L92.705312 7.2216386 92.705312 7.2216386Z"
                        />
                        <path
                          id="Fill-9"
                          d="M94.5294028 3.31507789C94.5294028 2.40750168 95.2650641 1.70162798 96.1525475 1.70162798 97.0395175 1.70162798 97.7488196 2.40750168 97.7488196 3.31507789 97.7488196 4.17159018 97.0395175 4.90299584 96.126873 4.90299584 95.2650641 4.90299584 94.5294028 4.17159018 94.5294028 3.31507789L94.5294028 3.31507789ZM93.2374598 18.1105106L93.2374598 17.3547645C94.7580775 17.2029344 94.9100708 17.0768065 94.9100708 15.312718L94.9100708 10.2463253C94.9100708 8.63338599 94.7839232 8.53227941 93.4402887 8.33108754L93.4402887 7.62521384C94.8850809 7.44853265 96.4056986 7.12053202 97.6984975 6.6926163L97.6984975 15.312718C97.6984975 17.0267638 97.8253297 17.1780833 99.3962695 17.3547645L99.3962695 18.1105106 93.2374598 18.1105106 93.2374598 18.1105106Z"
                        />
                        <path
                          id="Fill-10"
                          d="M110.016117 15.7413146C108.876167 17.3035303 107.2027 18.412809 105.682767 18.412809 102.311528 18.412809 100.334075 15.8168892 100.334075 13.0946712 100.334075 11.2044548 101.24672 9.46470674 102.894341 8.22981075 104.415129 7.09602133 106.036905 6.71763763 107.000556 6.71763763L107.025717 6.71763763C107.963523 6.71763763 108.80017 7.02044672 109.230989 7.3477665 109.585983 7.62521384 109.68714 7.87695901 109.68714 8.22981075 109.661979 8.8856418 109.05315 9.49040892 108.673338 9.49040892 108.521345 9.49040892 108.36918 9.4148343 108.140506 9.21245093 107.2027 8.38113019 106.366737 8.00308691 105.580925 8.00308691 104.339133 8.00308691 103.097341 9.13738696 103.097341 11.8090517 103.097341 15.2116114 105.504928 16.3210603 106.721559 16.3210603 107.786368 16.3210603 108.546335 16.0441236 109.560137 15.1615688L110.016117 15.7413146"
                        />
                        <path
                          id="Fill-11"
                          d="M113.920017 11.9353498C113.920017 15.0604622 115.060823 17.4802115 116.834591 17.4802115 118.02589 17.4802115 119.141877 16.6739121 119.141877 13.0441179 119.141877 9.76717541 118.128588 7.65023517 116.278309 7.65023517 115.060823 7.65023517 113.920017 9.06130171 113.920017 11.9353498L113.920017 11.9353498ZM122.310116 12.3637761C122.310116 16.4221669 119.369525 18.412809 116.555595 18.412809 112.754221 18.412809 110.751778 15.5899951 110.751778 12.8172238 110.751778 8.73398193 113.971024 6.71763763 116.658293 6.71763763 120.028505 6.71763763 122.310116 9.31372773 122.310116 12.3637761L122.310116 12.3637761Z"
                        />
                        <path
                          id="Fill-12"
                          d="M9.51242791 31.6880686C9.03094461 30.8061946 8.21997134 30.4026193 7.38366584 30.4026193 6.57235024 30.4026193 4.57024926 31.1590463 4.57024926 34.94016 4.57024926 37.9902084 6.39519588 39.275147 7.73848805 39.275147 8.37196464 39.275147 8.92978691 39.0734445 9.51242791 38.6954012L9.51242791 31.6880686 9.51242791 31.6880686ZM14.1254589 40.1064678C13.5174857 40.2077446 11.3377169 40.510043 9.51242791 41.0904697L9.51242791 39.5519135 7.966478 40.510043C7.20599799 40.9634907 6.72485703 41.0647675 6.44586031 41.0647675 4.31675592 41.0647675 1.42734269 39.275147 1.42734269 35.5953102 1.42734269 32.1665376 4.46874922 29.3689152 8.24547472 29.3689152 8.49896805 29.3689152 8.92978691 29.4201494 9.51242791 29.5455964L9.51242791 26.3193774C9.51242791 24.8575874 9.3604346 24.7314595 7.71315583 24.5801401L7.71315583 23.8494152C9.23394468 23.6725638 11.134888 23.320393 12.3006834 22.967371L12.3006834 37.6872291C12.3006834 39.0734445 12.4530191 39.1740405 13.4671636 39.3001684L14.1254589 39.3762536 14.1254589 40.1064678 14.1254589 40.1064678Z"
                        />
                        <path
                          id="Fill-13"
                          d="M18.0139542 33.4776891C19.1799209 33.4776891 20.2953943 33.452838 21.4863508 33.4021145 21.8920086 33.4021145 22.0441731 33.3016887 22.0441731 32.8981135 22.0441731 31.612494 21.3851931 30.3525767 20.2445587 30.3525767 19.2055954 30.3525767 18.2421154 31.4863661 18.0139542 33.4776891L18.0139542 33.4776891ZM24.7055963 38.4181241C23.1591329 40.5607665 21.2590455 41.0647675 20.2953943 41.0647675 17.0259978 41.0647675 15.1755478 38.5694435 15.1755478 35.6708848 15.1755478 33.8056897 15.9103532 32.2427931 16.974991 31.1840676 18.064961 30.0502782 19.4587464 29.3689152 20.7772199 29.3689152L20.8023809 29.3689152C23.0579752 29.3689152 24.806754 31.3101955 24.806754 33.3265399 24.806754 33.830711 24.6547607 34.108669 24.122613 34.2085841 23.6917942 34.2593076 20.5737063 34.5108826 17.8878066 34.6121593 17.9638033 37.5866331 19.6365854 38.9728486 21.4355152 38.9728486 22.424841 38.9728486 23.3871229 38.6191458 24.2746063 37.813357L24.7055963 38.4181241 24.7055963 38.4181241Z"
                        />
                        <path
                          id="Fill-14"
                          d="M45.540318 40.762469L45.540318 39.9554888C47.4919257 39.7542969 47.6192715 39.5774455 47.5935969 37.1325046L47.543446 27.2269537 47.4164426 27.2269537 41.6117704 40.5856176 40.9788073 40.5856176 35.630115 27.5042308 35.5289573 27.5042308 35.1998097 34.3098609C35.0981385 36.4017798 35.0981385 37.5360799 35.1741351 38.4181241 35.2501318 39.5774455 35.7821083 39.779148 37.480565 39.9304674L37.480565 40.762469 31.4479029 40.762469 31.4479029 39.9304674C32.8926951 39.8041693 33.3745207 39.4012749 33.5521886 38.4681668 33.704353 37.6366758 33.8806516 36.4017798 34.0584906 33.7551364L34.438645 28.6885735C34.6673196 25.664057 34.4894806 25.3866097 32.2847219 25.1849072L32.2847219 24.3784375 37.1257428 24.3784375 42.3217571 35.9733535 47.6192715 24.3784375 52.4346179 24.3784375 52.4346179 25.1849072C50.3310169 25.3866097 50.2300303 25.5384398 50.2806948 27.8065292L50.5088559 37.1325046C50.5848525 39.5774455 50.6865237 39.7542969 52.7387756 39.9554888L52.7387756 40.762469 45.540318 40.762469"
                        />
                        <path
                          id="Fill-15"
                          d="M56.7339059 34.5864572C56.7339059 37.7122504 57.8747115 40.13217 59.6491649 40.13217 60.8406349 40.13217 61.9562794 39.3257003 61.9562794 35.6959061 61.9562794 32.4189636 60.9417926 30.3020234 59.0913426 30.3020234 57.8747115 30.3020234 56.7339059 31.7130899 56.7339059 34.5864572L56.7339059 34.5864572ZM65.1240047 35.0155644C65.1240047 39.0734445 62.1835847 41.0647675 59.3701682 41.0647675 55.5681104 41.0647675 53.5661806 38.2419536 53.5661806 35.4691823 53.5661806 31.3857702 56.7847415 29.3689152 59.4713259 29.3689152 62.8425647 29.3689152 65.1240047 31.965516 65.1240047 35.0155644L65.1240047 35.0155644Z"
                        />
                        <path
                          id="Fill-16"
                          d="M73.2529078 40.762469L73.2529078 40.0058718C74.4688543 39.8548928 74.6208476 39.7287649 74.6208476 37.9646764L74.6208476 33.7050938C74.6208476 31.9149627 73.8608811 31.1590463 72.669411 31.1590463 71.8835988 31.1590463 71.1737832 31.5626216 70.4646523 32.1166652L70.4646523 38.1413576C70.4646523 39.7542969 70.6164744 39.8548928 71.807431 40.0058718L71.807431 40.762469 65.9274468 40.762469 65.9274468 40.0058718C67.5499069 39.8041693 67.6762256 39.7287649 67.6762256 38.0651022L67.6762256 32.8480708C67.6762256 31.3101955 67.5499069 31.2095996 66.2567656 30.9573438L66.2567656 30.3020234C67.600229 30.1003209 69.0958568 29.7723203 70.4646523 29.3188726L70.4646523 31.2346209C70.9714678 30.881599 71.5034444 30.4781939 72.0871124 30.1003209 72.8212332 29.621171 73.3790554 29.3689152 74.1140321 29.3689152 76.1423211 29.3689152 77.4097878 30.8310457 77.4097878 33.3265399L77.4097878 38.1413576C77.4097878 39.7542969 77.5619522 39.8298715 78.9300631 40.0058718L78.9300631 40.762469 73.2529078 40.762469"
                        />
                        <path
                          id="Fill-17"
                          d="M84.6383702 40.762469C84.1817056 40.9634907 83.8017223 41.0647675 83.5994069 41.0647675 81.7739468 41.0647675 80.7099937 40.13217 80.7099937 37.9389743L80.7099937 30.8061946 79.0623726 30.8061946 78.9348557 30.5287472 79.6446713 29.6717243 80.7099937 29.6717243 80.7099937 27.8315506 83.1429135 25.9663555 83.4977357 26.0924834 83.4977357 29.6717243 86.1081523 29.6717243C86.387149 29.9491717 86.3368269 30.6043219 85.956159 30.8061946L83.4977357 30.8061946 83.4977357 37.1076535C83.4977357 39.0989765 84.3852192 39.3762536 84.9430414 39.3762536 85.4493434 39.3762536 85.9311691 39.2251044 86.3368269 39.0484232L86.5648168 39.8298715 84.6383702 40.762469"
                        />
                        <path
                          id="Fill-18"
                          d="M89.9434157 33.4776891C91.1092112 33.4776891 92.2248557 33.452838 93.4158123 33.4021145 93.8209566 33.4021145 93.9729499 33.3016887 93.9729499 32.8981135 93.9729499 31.612494 93.3146546 30.3525767 92.1733355 30.3525767 91.1343722 30.3525767 90.1714057 31.4863661 89.9434157 33.4776891L89.9434157 33.4776891ZM96.6343732 38.4181241C95.0885944 40.5607665 93.1878223 41.0647675 92.2248557 41.0647675 88.9547746 41.0647675 87.1043246 38.5694435 87.1043246 35.6708848 87.1043246 33.8056897 87.8398147 32.2427931 88.903939 31.1840676 89.9935667 30.0502782 91.3875233 29.3689152 92.7059967 29.3689152L92.7311578 29.3689152C94.9874367 29.3689152 96.7360444 31.3101955 96.7360444 33.3265399 96.7360444 33.830711 96.5840511 34.108669 96.0513898 34.2085841 95.620571 34.2593076 92.5031678 34.5108826 89.8165835 34.6121593 89.8925801 37.5866331 91.5653623 38.9728486 93.3648055 38.9728486 94.3529331 38.9728486 95.3165844 38.6191458 96.2040678 37.813357L96.6343732 38.4181241 96.6343732 38.4181241Z"
                        />
                        <path
                          id="Fill-19"
                          d="M102.013704 32.0410906C102.875513 30.5537686 103.914989 29.3689152 104.953268 29.3689152 105.916919 29.3689152 106.575728 30.0747889 106.575728 30.8310457 106.575728 31.5874727 106.094587 32.2177718 105.486614 32.4444956 105.156781 32.595815 104.902946 32.5200702 104.750952 32.3690912 104.320134 32.0155586 104.015462 31.8644094 103.610318 31.8644094 103.052496 31.8644094 102.443838 32.3183677 101.963382 33.4776891L101.963382 38.1413576C101.963382 39.7287649 102.089529 39.8548928 104.041308 40.0058718L104.041308 40.762469 97.5023439 40.762469 97.5023439 40.0058718C98.9464515 39.8548928 99.1749549 39.7287649 99.1749549 38.1413576L99.1749549 32.7469643C99.1749549 31.3101955 99.0224481 31.2095996 97.7303339 30.9573438L97.7303339 30.3020234C99.1492804 30.1253422 100.517905 29.8230438 101.963382 29.3188726L101.963382 32.0410906 102.013704 32.0410906"
                        />
                        <path
                          id="Fill-20"
                          d="M111.967896 32.0410906C112.82902 30.5537686 113.868497 29.3689152 114.907631 29.3689152 115.871111 29.3689152 116.52992 30.0747889 116.52992 30.8310457 116.52992 31.5874727 116.048266 32.2177718 115.440121 32.4444956 115.11046 32.595815 114.857309 32.5200702 114.705316 32.3690912 114.273641 32.0155586 113.969654 31.8644094 113.563997 31.8644094 113.006174 31.8644094 112.39803 32.3183677 111.916889 33.4776891L111.916889 38.1413576C111.916889 39.7287649 112.043208 39.8548928 113.9955 40.0058718L113.9955 40.762469 107.455851 40.762469 107.455851 40.0058718C108.900644 39.8548928 109.128633 39.7287649 109.128633 38.1413576L109.128633 32.7469643C109.128633 31.3101955 108.97664 31.2095996 107.683841 30.9573438L107.683841 30.3020234C109.102788 30.1253422 110.471754 29.8230438 111.916889 29.3188726L111.916889 32.0410906 111.967896 32.0410906"
                        />
                        <path
                          id="Fill-21"
                          d="M119.735815 33.4776891C120.901439 33.4776891 122.017426 33.452838 123.208725 33.4021145 123.614383 33.4021145 123.766718 33.3016887 123.766718 32.8981135 123.766718 31.612494 123.107738 30.3525767 121.966077 30.3525767 120.927114 30.3525767 119.965174 31.4863661 119.735815 33.4776891L119.735815 33.4776891ZM126.428313 38.4181241C124.880994 40.5607665 122.981077 41.0647675 122.017426 41.0647675 118.748201 41.0647675 116.897922 38.5694435 116.897922 35.6708848 116.897922 33.8056897 117.632214 32.2427931 118.696852 31.1840676 119.787164 30.0502782 121.180436 29.3689152 122.500107 29.3689152L122.52407 29.3689152C124.780007 29.3689152 126.529299 31.3101955 126.529299 33.3265399 126.529299 33.830711 126.376964 34.108669 125.844645 34.2085841 125.413312 34.2593076 122.296423 34.5108826 119.610865 34.6121593 119.686177 37.5866331 121.358446 38.9728486 123.157376 38.9728486 124.146702 38.9728486 125.108641 38.6191458 125.99698 37.813357L126.428313 38.4181241 126.428313 38.4181241Z"
                        />
                        <path
                          id="Fill-23"
                          d="M139.075593 30.4026193C137.808982 30.6293432 137.581335 30.8567479 136.922355 32.2427931 136.287338 33.5784552 135.476022 35.6708848 133.880777 39.4262963 132.181122 43.4589849 131.674478 44.9963495 131.243146 46.4079267 131.092522 46.9378001 130.762176 47.063928 130.356518 47.063928 129.647901 47.063928 128.709924 46.3837564 128.709924 45.6016273 128.709924 45.1987329 128.886222 44.972009 129.368904 44.6440084 130.306881 44.1405181 130.863162 43.5859638 131.371518 42.6777068 131.725827 42.0729396 131.878163 41.6950666 131.979149 41.3925979 132.10581 40.9891929 132.056173 40.6363411 131.902126 40.2077446 130.686864 36.8552275 129.394578 33.452838 128.81091 32.0916439 128.328229 30.9073012 128.050944 30.6043219 126.782621 30.4026193L126.782621 29.6717243 132.638129 29.6717243 132.638129 30.4026193C131.522142 30.6293432 131.345844 30.8061946 131.648803 31.6632175L133.702767 37.5360799C134.336072 35.9982046 135.274049 33.3016887 135.755019 31.8143667 136.034016 30.9316416 135.832043 30.6293432 134.514083 30.4026193L134.514083 29.6717243 139.075593 29.6717243 139.075593 30.4026193"
                        />
                        <path
                          id="Fill-25"
                          d="M1.06173717 1.39132951C0.995839175 2.8835877 0.875682307 4.24222861 0.789587001 5.72223146L1.64249537 5.72223146C1.94442801 4.49397378 2.22085727 3.67473816 2.59707493 3.23899264 2.94932968 2.75133213 3.42516457 2.52205509 5.48477653 2.52205509L6.61445649 2.52205509 6.61445649 14.7836957C6.61445649 16.9079551 6.36250363 17.1120406 4.20395909 17.2926367L4.20395909 18.1105106 12.0362356 18.1105106 12.0362356 17.2926367C9.75188582 17.1120406 9.52663449 16.9079551 9.52663449 14.7836957L9.52663449 2.52205509 10.8817369 2.52205509C12.5142956 2.52205509 13.065956 2.67575752 13.5186838 3.18707765 13.8949015 3.62418487 14.1952937 4.41601618 14.496884 5.69669949L15.3256583 5.64546535C15.2214196 4.32086706 15.117181 2.80375776 15.0853445 1.39132951L1.06173717 1.39132951"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          </Link>
          
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/"><a>Inicio</a></Link>
            </li>
            <li tabIndex={0}>
              <a>
                Apartados
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                {labs.map((i)=>(
                  <li key={i}>
                  <Link
                    className="btn btn-active bg-gray-700 mx-auto"
                    href={`/laboratorio${i}`}
                  >
                    <a className="btn btn-active bg-gray-700 mx-auto mb-1">{`Lab${i}`}</a>
                  </Link>
                </li>
                ))}
                
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
