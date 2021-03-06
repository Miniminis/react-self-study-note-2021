const test_data = {
  case1: {
    page0: [0],
    page1: [1, 5],
    page2: [4],
    page3: [1],
    page4: [3, 4],
    page5: [2],
    page6: [1, 3, 4],
    page7: [2],
    page8: [3],
  },
  case2: {
    page0: [0],
    page1: [2],
    page2: [2],
    page3: [1],
    page4: [1, 3],
    page5: [4],
    page6: [1, 2, 3],
    page7: [2],
    page8: [3],
  },
  case3: {
    page0: [0],
    page1: [4, 5, 6],
    page2: [2],
    page3: [1, 2],
    page4: [1, 2, 3],
    page5: [2],
    page6: [4],
    page7: [1, 3, 4],
    page8: [2],
  },
  case4: {
    page0: [0],
    page1: [3, 5],
    page2: [5, 6],
    page3: [1, 2],
    page4: [2],
    page5: [2, 4],
    page6: [4],
    page7: [3, 4],
    page8: [2],
  },
  case5: {
    page0: [0],
    page1: [1, 5],
    page2: [3],
    page3: [1],
    page4: [2],
    page5: [3],
    page6: [2],
    page7: [1, 2],
    page8: [3],
  },
  case6: {
    page0: [0],
    page1: [4, 5],
    page2: [3],
    page3: [1],
    page4: [1],
    page5: [3],
    page6: [2],
    page7: [1, 2],
    page8: [3],
  },
  case7: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [1],
    page4: [1, 2],
    page5: [3],
    page6: [3],
    page7: [12],
    page8: [1],
  },
  case8: {
    page0: [0],
    page1: [3],
    page2: [4],
    page3: [2],
    page4: [3, 4],
    page5: [2],
    page6: [2, 3, 4],
    page7: [3, 4],
    page8: [1],
  },
  case9: {
    page0: [0],
    page1: [1, 2],
    page2: [1, 2],
    page3: [2],
    page4: [1],
    page5: [2],
    page6: [1, 2, 3],
    page7: [2, 3],
    page8: [1],
  },
  case10: {
    page0: [0],
    page1: [4, 6],
    page2: [4, 6],
    page3: [2],
    page4: [3, 4],
    page5: [1],
    page6: [1, 2, 3, 4],
    page7: [2],
    page8: [1],
  },
  case11: {
    page0: [0],
    page1: [1, 4],
    page2: [1],
    page3: [1],
    page4: [1, 2, 3, 4],
    page5: [1],
    page6: [1, 2, 3],
    page7: [1, 3],
    page8: [2, 4],
  },
  case12: {
    page0: [0],

    page1: [3],
    page2: [2],
    page3: [2],
    page4: [1, 3, 4],
    page5: [4],
    page6: [1, 4],
    page7: [3, 4],
    page8: [2],
  },
  case13: {
    page0: [0],
    page1: [2],
    page2: [5],
    page3: [2],
    page4: [1, 3, 4],
    page5: [2, 4],
    page6: [1, 4],
    page7: [1, 3],
    page8: [2, 4],
  },
  case14: {
    page0: [0],
    page1: [1],
    page2: [1, 2],
    page3: [2],
    page4: [1, 2, 3, 4],
    page5: [3],
    page6: [1, 4],
    page7: [1, 2],
    page8: [1, 3],
  },
  case15: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [1],
    page4: [1, 3, 4],
    page5: [3],
    page6: [1, 2, 3],
    page7: [2],
    page8: [4],
  },
  case16: {
    page0: [0],
    page1: [4],
    page2: [1, 2],
    page3: [2],
    page4: [1, 2],
    page5: [3],
    page6: [1, 2, 3],
    page7: [2],
    page8: [3],
  },
  case17: {
    page0: [0],
    page1: [4],
    page2: [1],
    page3: [2],
    page4: [1, 2],
    page5: [3],
    page6: [1, 2],
    page7: [1, 2],
    page8: [3],
  },
  case18: {
    page0: [0],
    page1: [1],
    page2: [5],
    page3: [1],
    page4: [1, 2, 3, 4],
    page5: [1],
    page6: [2],
    page7: [1],
    page8: [1],
  },
  case19: {
    page0: [0],
    page1: [2, 3],
    page2: [4, 6],
    page3: [1],
    page4: [3, 4],
    page5: [2, 4],
    page6: [2, 4],
    page7: [1, 3, 4],
    page8: [2],
  },
  case20: {
    page0: [0],
    page1: [2, 3],
    page2: [4, 5, 6],
    page3: [1, 2],
    page4: [3, 4],
    page5: [2, 4],
    page6: [1, 2, 4],
    page7: [1, 4],
    page8: [2, 4],
  },
};

const perfume_data = {
  1: {
    NUM: "case1",
    TYPE: "?????? ??????",
    BRAND: "??????",
    NAME: "?????? ??? ??????",
    TOP: "?????????",
    MIDDLE: "?????????, ????????????",
    BASE: "??????",
    ETC: "3040??????",
    DESC: "???????????? ???????????? ????????????"
  },
  2: {
    NUM: "case2",
    TYPE: "?????? ??????",
    BRAND: "?????????",
    NAME: "?????? ??????",
    TOP: "?????????",
    MIDDLE: "?????????, ??????",
    BASE: "?????????",
    ETC: "2030??????,?????????",
    DESC: "@@"
  },
  3: {
    NUM: "case3",
    TYPE: "?????? ?????????",
    BRAND: "?????????",
    NAME: "??? ??????",
    TOP: "????????????, ???????????????, ??????",
    MIDDLE: "??????, ?????????, ?????????",
    BASE: "?????????, ??????",
    ETC: "3040??????, ?????????, ?????????, ?????????,?????????",
    DESC: "???????????? ???????????? ????????????"
  },
  4: {
    NUM: "case4",
    TYPE: "?????? ?????????",
    BRAND: "?????????",
    NAME: "?????? ?????????",
    TOP: "????????????",
    MIDDLE: "??????????????????, ??????",
    BASE: "?????????, ?????? ??????",
    ETC: "????????????,????????????,??????,????????????",
    DESC: "???????????? ???????????? ?????? ????????????"
  },
  5: {
    NUM: "case5",
    TYPE: "?????? ?????????",
    BRAND: "????????????",
    NAME: "????????????",
    TOP: "????????? ??????,?????? ?????????",
    MIDDLE: "????????????, ??????????????????",
    BASE: "?????????, ?????????, ??????",
    ETC: "?????????,??????,??????,????????? ?????? ?????? ??????,????????????",
    DESC: "???????????? ????????? ????????????"
  },
  6: {
    NUM: "case6",
    TYPE: "?????? ?????????",
    BRAND: "?????????",
    NAME: "????????? ?????????",
    TOP: "??????, ????????????,??????",
    MIDDLE: "????????????, ?????????????????? & ?????????",
    BASE: "?????? ??????, ??????, ????????????",
    ETC: "????????? ????????????, ?????? ????????????,??????,??????,?????????",
    DESC: "???????????? ???????????? ????????? ????????? ????????????"
  },
  7: {
    NUM: "case7",
    TYPE: "?????? ??????",
    BRAND: "??????",
    NAME: "????????? ??? ????????????",
    TOP: "?????????(?????????), ????????????",
    MIDDLE: "?????????",
    BASE: "?????????",
    ETC: "10??? ??????, 20??? ?????????, ?????? ?????????",
    DESC: "???????????? ????????? ???????????? ????????????"
  },
  8: {
    NUM: "case8",
    TYPE: "?????? ??????",
    BRAND: "?????????",
    NAME: "???????????? ??? ?????? ??????",
    TOP: "????????????",
    MIDDLE: "????????? ???",
    BASE: "??????",
    ETC: "????????????, ?????????",
    DESC: "???????????? ????????? ????????????"
  },
  9: {
    NUM: "case9",
    TYPE: "?????? ??????",
    BRAND: "????????????",
    NAME: "?????????",
    TOP: "????????????",
    MIDDLE: "??????",
    BASE: "??????",
    ETC: "???, ??????????????? ???????????? ????????? ??????,?????????????????????",
    DESC: "???????????? ????????? ????????????"
  },
  10: {
    NUM: "case10",
    TYPE: "?????? ?????????",
    BRAND: "CK",
    NAME: "BE ???????????????",
    TOP: "????????????, ?????????, ?????????",
    MIDDLE: "????????????, ?????????",
    BASE: "????????????",
    ETC: "????????? ???????????? ????????????, ????????????",
    DESC: "???????????? ????????? ????????????"
  },
  11: {
    NUM: "case11",
    TYPE: "?????? ??????",
    BRAND: "?????????",
    NAME: "???????????? ?????? ??? ???????????? ??????",
    TOP: "??? ????????? ??????",
    MIDDLE: "????????????",
    BASE: "?????????",
    ETC: "??????,??????,????????????, ????????????,??????",
    DESC: "????????? ????????? ?????? ??????????????? ????????????"
  },
  12: {
    NUM: "case12",
    TYPE: "?????? ??????",
    BRAND: "?????????",
    NAME: "????????? ??? ???",
    TOP: "???????????? ??????",
    MIDDLE: "???????????????",
    BASE: "??????",
    ETC: "???????????????, ????????????",
    DESC: "??????????????? ????????? ????????????"
  },
  13: {
    NUM: "case13",
    TYPE: "?????? ??????",
    BRAND: "?????????????????? ??????",
    NAME: "????????? ??? ????????????",
    TOP: "?????????",
    MIDDLE: "?????????",
    BASE: "?????????",
    ETC: "????????????+??????, ??????,????????? ??????, ?????????, ?????????+?????????",
    DESC: "???????????? ????????? ????????????"
  },
  14: {
    NUM: "case14",
    TYPE: "?????? ??????",
    BRAND: "??????",
    NAME: "?????? ????????????",
    TOP: "?????? ????????? ??????, ?????? ?????????",
    MIDDLE: "?????????, ????????????",
    BASE: "????????? ?????????, ?????????",
    ETC: "??????, ??????, ?????????, ?????????",
    DESC: "??????????????? ??????????????? ????????????"
  },
  15: {
    NUM: "case15",
    TYPE: "?????? ?????????",
    BRAND: "??????",
    NAME: "????????? ?????? ?????? ???????????????",
    TOP: "????????????, ??????",
    MIDDLE: "???????????????, ???????????????",
    BASE: "?????????",
    ETC:
      "2030?????? ?????? ?????????, ???????????????-??? ?????? ??????(???????????? ????????? ???) / ????????? : ???,??????,?????? (????????? ??????,???) ",
    DESC: "??????????????? ????????? ????????????"
  },
  16: {
    NUM: "case16",
    TYPE: "?????? ?????????",
    BRAND: "?????? ????????????",
    NAME: "????????? ?????? ??? ???",
    TOP: "????????????, ??????, ??????",
    MIDDLE: "?????????, ??????",
    BASE: "?????????",
    ETC: "20??? ??????, ??????????????????,??????",
    DESC: "??????????????? ????????? ????????????"
  },
  17: {
    NUM: "case17",
    TYPE: "?????? ??????",
    BRAND: "?????????",
    NAME: "?????????????????? ??????????????????",
    TOP: "??????, ??????",
    MIDDLE: "?????????, ????????????",
    BASE: "?????????, ?????????",
    ETC: "?????????, ????????????,??????",
    DESC: "????????? ???????????? ????????? ????????????"
  },
  18: {
    NUM: "case18",
    TYPE: "?????? ??????",
    BRAND: "????????????",
    NAME: "?????? ?????????",
    TOP: "????????????",
    MIDDLE: "?????????, ????????? ???",
    BASE: "??????, ??????",
    ETC: "?????????",
    DESC: "???????????? ????????? ????????????"
  },
  19: {
    NUM: "case19",
    TYPE: "?????? ?????????",
    BRAND: "??????",
    NAME: "KARMA",
    TOP: "?????????",
    MIDDLE: "?????????",
    BASE: "???????????????",
    ETC: "",
    DESC: "??????????????? ???????????? ????????????"
  },
  20: {
    NUM: "case20",
    TYPE: "?????? ?????????",
    BRAND: "???????????? ????????????",
    NAME: "?????? EDP",
    TOP: "????????????, ??????",
    MIDDLE: "???????????????, ???????????????",
    BASE: "????????????, ?????????",
    ETC: "",
    DESC: "??????????????? ???????????? ????????????"
  },
};

export { test_data, perfume_data };
