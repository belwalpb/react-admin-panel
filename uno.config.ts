import breakPointVariant from "./uno/breakPointVariant";

export default {
  // presets
  preflight: false,
  components: false,
  uno: false, // disabled `@unocss/preset-uno`
  icons: false, // disabled `@unocss/preset-icons`
  attributify: false, // disabled `@unocss/preset-attributify`,
  webFonts: false,

  // core options
  shortcuts: [],
  variants: [
    // breakpoint
    breakPointVariant,
  ],
  rules: [
    // ar-number => { aspect-ratio : number }
    [/^ar-(\d+)$/, (match: any[]) => ({ "aspect-ratio": `${match[1]}` })],
    //  ar-number1-number2 => { aspect-ratio : number1/number2 }
    [
      /^ar-(\d+)-(\d+)$/,
      (match: any[]) => ({ "aspect-ratio": `${match[1]}/${match[2]}` }),
    ],

    // w-98% => {  width : 98% } w-98px => {  width : 98px }  w-auto => {  width : auto }
    [/^w-(\S+)$/, (match: any[]) => ({ width: `${match[1]}` })],

    // h-98% => {  height : 98% } h-98px => {  height : 98px }  h-auto => {  height : auto } h-50vh => { height : 50vh }
    [/^h-(\S+)$/, (match: any[]) => ({ height: `${match[1]}` })],

    // z-number => { z-index : number }
    [/^z-(\d+)$/, (match: any[]) => ({ "z-index": `${match[1]}` })],

    // m-20px => { margin : 20px } m-20% => { margin : 20% }
    [/^m-(\S+)$/, (match: any[]) => ({ margin: `${match[1]}` })],
    // mb-20px => { margin-bottom : 20px } mb-20% => { margin-bottom : 20% }
    [/^mb-(\S+)$/, (match: any[]) => ({ "margin-bottom": `${match[1]}` })],
    // ml-20px => { margin-left : 20px } ml-20% => { margin-left : 20% }
    [/^ml-(\S+)$/, (match: any[]) => ({ "margin-left": `${match[1]}` })],
    // mr-20px => { margin-right : 20px } mr-20% => { margin-right : 20% }
    [/^mr-(\S+)$/, (match: any[]) => ({ "margin-right": `${match[1]}` })],
    // mt-20px => { margin-top : 20px } mt-20% => { margin-top : 20% }
    [/^mt-(\S+)$/, (match: any[]) => ({ "margin-top": `${match[1]}` })],
    // my-20px => { margin-top : 20px, margin-bottom: 20px } mt-20% => { margin-top : 20%, margin-bottom: 20% }
    [
      /^my-(\S+)$/,
      (match: any[]) => ({
        "margin-top": `${match[1]}`,
        "margin-bottom": `${match[1]}`,
      }),
    ],
    // mx-20px => { margin-left : 20px, margin-right: 20px } mt-20% => { margin-left : 20%, margin-right: 20% }
    [
      /^mx-(\S+)$/,
      (match: any[]) => ({
        "margin-left": `${match[1]}`,
        "margin-right": `${match[1]}`,
      }),
    ],

    // mxl-20px => { margin-left : 20px }
    [/^mxl-(\S+)$/, (match: any[]) => ({ "margin-left": `${match[1]}` })],

    // mxl-20px => { margin-left : 20px }
    [/^mxr-(\S+)$/, (match: any[]) => ({ "margin-right": `${match[1]}` })],

    // br-20px => { border-radius : 20px } br-20% => { border-radius : 20% }
    [/^br-(\S+)$/, (match: any[]) => ({ "border-radius": `${match[1]}` })],
    // left-* => { left : * }
    [/^left-(\S+)$/, (match: any[]) => ({ left: `${match[1]}` })],
    // top-* => { top : * }
    [/^top-(\S+)$/, (match: any[]) => ({ top: `${match[1]}` })],

    // mw-* => { max-width : * }
    [/^mw-(\S+)$/, (match: any[]) => ({ "max-width": `${match[1]}` })],
    // op-* => { opacity : * }
    [/^op-(\d+)$/, (match: any[]) => ({ opacity: `${match[1]}/100` })],

    // p-* => { padding : * }
    [/^p-(\S+)$/, (match: any[]) => ({ padding: `${match[1]}` })],
    // py-* => { padding-top : *, padding-bottom: * }
    [
      /^py-(\S+)$/,
      (match: any[]) => ({
        "padding-top": `${match[1]}`,
        "padding-bottom": `${match[1]}`,
      }),
    ],
    // px-* => { padding-left : *, padding-right: * }
    [
      /^px-(\S+)$/,
      (match: any[]) => ({
        "padding-left": `${match[1]}`,
        "padding-right": `${match[1]}`,
      }),
    ],
    // pl-* => { padding-left : * }
    [/^pl-(\S+)$/, (match: any[]) => ({ "padding-left": `${match[1]}` })],
    // pr-* => { padding-right : * }
    [/^pr-(\S+)$/, (match: any[]) => ({ "padding-right": `${match[1]}` })],
    // pt-* => { padding-top : * }
    [/^pt-(\S+)$/, (match: any[]) => ({ "padding-top": `${match[1]}` })],
    // pb-* => { padding-bottom : * }
    [/^pb-(\S+)$/, (match: any[]) => ({ "padding-bottom": `${match[1]}` })],

    // d-* => { display : * }
    [/^d-(\S+)$/, (match: any[]) => ({ display: `${match[1]}` })],

    // d-* => { display : * }
    [/^bg-(\S+)$/, (match: any[]) => ({ "background-color": `${match[1]}` })],
  ],
};
