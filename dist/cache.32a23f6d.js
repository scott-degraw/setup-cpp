function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=require("child_process"),o=require("util"),s=require("path"),a=require("os"),i=require("fs"),n=require("assert"),c=require("crypto"),l=require("stream"),p=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire810d;p.register("iNHnD",((t,r)=>{async function o(e,t){if(s.isCacheFeatureAvailable()){const r=a.getCacheDistributor(e,t,void 0);await r.restoreCache()}}e(t.exports,"cacheDependencies",(()=>o));var s=p("3Mp5H"),a=p("tIILP")})),p.register("tIILP",((t,r)=>{function o(e,t,r){switch(e){case n.Pip:return new s.default(t,r);case n.Pipenv:return new a.default(t,r);case n.Poetry:return new i.default(t,r);default:throw Error(`Caching for '${e}' is not supported`)}}e(t.exports,"getCacheDistributor",(()=>o));var s=p("5p0V2"),a=p("gyWii"),i=p("9rlmk");let n;(e=>{e.Pip="pip",e.Pipenv="pipenv",e.Poetry="poetry"})(n||(n={}))})),p.register("5p0V2",(function(i,n){e(i.exports,"default",(()=>f));var c=p("b5WCL"),l=p("9bqVn"),u=p("ca0ts"),h=p("c3SoR"),d=p("3Mp5H"),f=class extends h.default{constructor(e,t="**/requirements.txt"){super("pip",t),this.pythonVersion=e}async getCacheGlobalDirectories(){let e=1,i="",n="";if(d.IS_WINDOWS){const e=t(o).promisify(r.exec);({stdout:i,stderr:n}=await e("pip cache dir"))}else({stdout:i,stderr:n,exitCode:e}=await u.getExecOutput("pip cache dir"));if(e&&n)throw Error("Could not get cache folder path for pip package manager");let c=i.trim();return c.includes("~")&&(c=s.join(t(a).homedir(),c.slice(1))),l.debug("global cache directory path is "+c),[c]}async computeKeys(){const e=await c.hashFiles(this.cacheDependencyPath);return{primaryKey:`${this.CACHE_KEY_PREFIX}-${process.env.RUNNER_OS}-python-${this.pythonVersion}-${this.packageManager}-${e}`,restoreKey:[`${this.CACHE_KEY_PREFIX}-${process.env.RUNNER_OS}-python-${this.pythonVersion}-${this.packageManager}`]}}}})),p.register("b5WCL",(function(e,t){"use strict";function r(e,t){return o(this,void 0,void 0,(function*(){return yield s.DefaultGlobber.create(e,t)}))}var o=e.exports&&e.exports.__awaiter||((e,t,r,o)=>new(r||(r=Promise))(((s,a)=>{function i(e){try{c(o.next(e))}catch(e){a(e)}}function n(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((e=>{e(t)}))).then(i,n)}c((o=o.apply(e,t||[])).next())})));Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hashFiles=e.exports.create=void 0;var s=p("2LsYP"),a=p("c7nrF");e.exports.create=r,e.exports.hashFiles=function(e,t){return o(this,void 0,void 0,(function*(){let o=!0;t&&"boolean"==typeof t.followSymbolicLinks&&(o=t.followSymbolicLinks);const s=yield r(e,{followSymbolicLinks:o});return a.hashFiles(s)}))}})),p.register("2LsYP",(function(e,t){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),a=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&r(t,e,s);return o(t,e),t}),n=e.exports&&e.exports.__awaiter||((e,t,r,o)=>new(r||(r=Promise))(((s,a)=>{function i(e){try{c(o.next(e))}catch(e){a(e)}}function n(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((e=>{e(t)}))).then(i,n)}c((o=o.apply(e,t||[])).next())}))),c=e.exports&&e.exports.__asyncValues||function(e){function t(t){r[t]=e[t]&&(r=>new Promise(((o,s)=>{((e,t,r,o)=>{Promise.resolve(o).then((t=>{e({value:t,done:r})}),t)})(o,s,(r=e[t](r)).done,r.value)})))}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)},l=e.exports&&e.exports.__await||function(e){return this instanceof l?(this.v=e,this):new l(e)},u=e.exports&&e.exports.__asyncGenerator||function(e,t,r){function o(e){p[e]&&(c[e]=t=>new Promise(((r,o)=>{u.push([e,t,r,o])>1||s(e,t)})))}function s(e,t){try{(r=p[e](t)).value instanceof l?Promise.resolve(r.value.v).then(a,i):n(u[0][2],r)}catch(e){n(u[0][3],e)}var r}function a(e){s("next",e)}function i(e){s("throw",e)}function n(e,t){e(t),u.shift(),u.length&&s(u[0][0],u[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c,p=r.apply(e,t||[]),u=[];return c={},o("next"),o("throw"),o("return"),c[Symbol.asyncIterator]=function(){return this},c};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.DefaultGlobber=void 0;const h=a(p("9bqVn")),d=a(i),f=a(p("ivUaY")),m=a(s),y=a(p("btf6r"));var b=p("iOrzV"),g=p("9aW8w"),v=p("e51CO");const x="win32"===process.platform;class _{constructor(e){this.patterns=[],this.searchPaths=[],this.options=f.getOptions(e)}getSearchPaths(){return this.searchPaths.slice()}glob(){var e,t;return n(this,void 0,void 0,(function*(){const r=[];try{for(var o,s=c(this.globGenerator());!(o=yield s.next()).done;)r.push(o.value)}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=s.return)&&(yield t.call(s))}finally{if(e)throw e.error}}return r}))}globGenerator(){return u(this,arguments,(function*(){const e=f.getOptions(this.options),t=[];for(const r of this.patterns)t.push(r),e.implicitDescendants&&(r.trailingSeparator||"**"!==r.segments[r.segments.length-1])&&t.push(new g.Pattern(r.negate,!0,r.segments.concat("**")));const r=[];for(const e of y.getSearchPaths(t)){h.debug(`Search path '${e}'`);try{yield l(d.promises.lstat(e))}catch(e){if("ENOENT"===e.code)continue;throw e}r.unshift(new v.SearchState(e,1))}const o=[];for(;r.length;){const s=r.pop(),a=y.match(t,s.path),i=!!a||y.partialMatch(t,s.path);if(!a&&!i)continue;const n=yield l(_.stat(s,e,o));if(n)if(n.isDirectory()){if(a&b.MatchKind.Directory&&e.matchDirectories)yield yield l(s.path);else if(!i)continue;const t=s.level+1,o=(yield l(d.promises.readdir(s.path))).map((e=>new v.SearchState(m.join(s.path,e),t)));r.push(...o.reverse())}else a&b.MatchKind.File&&(yield yield l(s.path))}}))}static create(e,t){return n(this,void 0,void 0,(function*(){const r=new _(t);x&&(e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n"));const o=e.split("\n").map((e=>e.trim()));for(const e of o)e&&!e.startsWith("#")&&r.patterns.push(new g.Pattern(e));return r.searchPaths.push(...y.getSearchPaths(r.patterns)),r}))}static stat(e,t,r){return n(this,void 0,void 0,(function*(){let o;if(t.followSymbolicLinks)try{o=yield d.promises.stat(e.path)}catch(r){if("ENOENT"===r.code){if(t.omitBrokenSymbolicLinks)return void h.debug(`Broken symlink '${e.path}'`);throw Error(`No information found for the path '${e.path}'. This may indicate a broken symbolic link.`)}throw r}else o=yield d.promises.lstat(e.path);if(o.isDirectory()&&t.followSymbolicLinks){const t=yield d.promises.realpath(e.path);for(;r.length>=e.level;)r.pop();if(r.some((e=>e===t)))return void h.debug(`Symlink cycle detected for path '${e.path}' and realpath '${t}'`);r.push(t)}return o}))}}e.exports.DefaultGlobber=_})),p.register("ivUaY",((e,t)=>{"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),s=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&r(t,e,s);return o(t,e),t});Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getOptions=void 0;const a=s(p("9bqVn"));e.exports.getOptions=e=>{const t={followSymbolicLinks:!0,implicitDescendants:!0,matchDirectories:!0,omitBrokenSymbolicLinks:!0};return e&&("boolean"==typeof e.followSymbolicLinks&&(t.followSymbolicLinks=e.followSymbolicLinks,a.debug(`followSymbolicLinks '${t.followSymbolicLinks}'`)),"boolean"==typeof e.implicitDescendants&&(t.implicitDescendants=e.implicitDescendants,a.debug(`implicitDescendants '${t.implicitDescendants}'`)),"boolean"==typeof e.matchDirectories&&(t.matchDirectories=e.matchDirectories,a.debug(`matchDirectories '${t.matchDirectories}'`)),"boolean"==typeof e.omitBrokenSymbolicLinks&&(t.omitBrokenSymbolicLinks=e.omitBrokenSymbolicLinks,a.debug(`omitBrokenSymbolicLinks '${t.omitBrokenSymbolicLinks}'`))),t}})),p.register("btf6r",((e,t)=>{"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),s=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&r(t,e,s);return o(t,e),t});Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.partialMatch=e.exports.match=e.exports.getSearchPaths=void 0;const a=s(p("aXEcz"));var i=p("iOrzV");const n="win32"===process.platform;e.exports.getSearchPaths=e=>{e=e.filter((e=>!e.negate));const t={};for(const r of e)t[n?r.searchPath.toUpperCase():r.searchPath]="candidate";const r=[];for(const o of e){const e=n?o.searchPath.toUpperCase():o.searchPath;if("included"===t[e])continue;let s=!1,i=e,c=a.dirname(i);for(;c!==i;){if(t[c]){s=!0;break}i=c,c=a.dirname(i)}s||(r.push(o.searchPath),t[e]="included")}return r},e.exports.match=(e,t)=>{let r=i.MatchKind.None;for(const o of e)o.negate?r&=~o.match(t):r|=o.match(t);return r},e.exports.partialMatch=(e,t)=>e.some((e=>!e.negate&&e.partialMatch(t)))})),p.register("aXEcz",((e,t)=>{"use strict";function r(e){return h.default(e,"hasAbsoluteRoot parameter 'itemPath' must not be empty"),e=o(e),d?e.startsWith("\\\\")||/^[A-Z]:\\/i.test(e):e.startsWith("/")}function o(e){return e=e||"",d?(e=e.replace(/\//g,"\\"),(/^\\\\+[^\\]/.test(e)?"\\":"")+e.replace(/\\\\+/g,"\\")):e.replace(/\/\/+/g,"/")}function a(e){return e?(e=o(e)).endsWith(u.sep)?e===u.sep||d&&/^[A-Z]:\\$/i.test(e)?e:e.substr(0,e.length-1):e:""}var i=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),c=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),l=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&i(t,e,r);return c(t,e),t}),p=e.exports&&e.exports.__importDefault||(e=>e&&e.__esModule?e:{default:e});Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.safeTrimTrailingSeparator=e.exports.normalizeSeparators=e.exports.hasRoot=e.exports.hasAbsoluteRoot=e.exports.ensureAbsoluteRoot=e.exports.dirname=void 0;const u=l(s),h=p(n),d="win32"===process.platform;e.exports.dirname=e=>{if(e=a(e),d&&/^\\\\[^\\]+(\\[^\\]+)?$/.test(e))return e;let t=u.dirname(e);return d&&/^\\\\[^\\]+\\[^\\]+\\$/.test(t)&&(t=a(t)),t},e.exports.ensureAbsoluteRoot=(e,t)=>{if(h.default(e,"ensureAbsoluteRoot parameter 'root' must not be empty"),h.default(t,"ensureAbsoluteRoot parameter 'itemPath' must not be empty"),r(t))return t;if(d){if(t.match(/^[A-Z]:[^\\/]|^[A-Z]:$/i)){let e=process.cwd();return h.default(e.match(/^[A-Z]:\\/i),`Expected current directory to start with an absolute drive root. Actual '${e}'`),t[0].toUpperCase()===e[0].toUpperCase()?2===t.length?`${t[0]}:\\${e.substr(3)}`:(e.endsWith("\\")||(e+="\\"),`${t[0]}:\\${e.substr(3)}${t.substr(2)}`):`${t[0]}:\\${t.substr(2)}`}if(o(t).match(/^\\$|^\\[^\\]/)){const e=process.cwd();return h.default(e.match(/^[A-Z]:\\/i),`Expected current directory to start with an absolute drive root. Actual '${e}'`),`${e[0]}:\\${t.substr(1)}`}}return h.default(r(e),"ensureAbsoluteRoot parameter 'root' must have an absolute root"),e.endsWith("/")||d&&e.endsWith("\\")||(e+=u.sep),e+t},e.exports.hasAbsoluteRoot=r,e.exports.hasRoot=e=>(h.default(e,"isRooted parameter 'itemPath' must not be empty"),e=o(e),d?e.startsWith("\\")||/^[A-Z]:/i.test(e):e.startsWith("/")),e.exports.normalizeSeparators=o,e.exports.safeTrimTrailingSeparator=a})),p.register("iOrzV",((e,t)=>{"use strict";var r;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MatchKind=void 0,(r=e.exports.MatchKind||(e.exports.MatchKind={}))[r.None=0]="None",r[r.Directory=1]="Directory",r[r.File=2]="File",r[r.All=3]="All"})),p.register("9aW8w",(function(e,t){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),i=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&r(t,e,s);return o(t,e),t}),c=e.exports&&e.exports.__importDefault||(e=>e&&e.__esModule?e:{default:e});Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Pattern=void 0;const l=i(a),u=i(s),h=i(p("aXEcz")),d=c(n);var f=p("5RQ11"),m=p("iOrzV"),y=p("i7Uxm");const b="win32"===process.platform;class g{constructor(e,t=!1,r,o){let s;if(this.negate=!1,"string"==typeof e)s=e.trim();else{d.default((r=r||[]).length,"Parameter 'segments' must not empty");const t=g.getLiteral(r[0]);d.default(t&&h.hasAbsoluteRoot(t),"Parameter 'segments' first element must be a root path"),s=(""+new y.Path(r)).trim(),e&&(s="!"+s)}for(;s.startsWith("!");)this.negate=!this.negate,s=s.substr(1).trim();s=g.fixupPattern(s,o),this.segments=new y.Path(s).segments,this.trailingSeparator=h.normalizeSeparators(s).endsWith(u.sep),s=h.safeTrimTrailingSeparator(s);let a=!1;const i=this.segments.map((e=>g.getLiteral(e))).filter((e=>!a&&!(a=""===e)));this.searchPath=""+new y.Path(i),this.rootRegExp=RegExp(g.regExpEscape(i[0]),b?"i":""),this.isImplicitPattern=t;const n={dot:!0,nobrace:!0,nocase:b,nocomment:!0,noext:!0,nonegate:!0};s=b?s.replace(/\\/g,"/"):s,this.minimatch=new f.Minimatch(s,n)}match(e){return"**"===this.segments[this.segments.length-1]?(e=h.normalizeSeparators(e)).endsWith(u.sep)||!1!==this.isImplicitPattern||(e=`${e}${u.sep}`):e=h.safeTrimTrailingSeparator(e),this.minimatch.match(e)?this.trailingSeparator?m.MatchKind.Directory:m.MatchKind.All:m.MatchKind.None}partialMatch(e){return e=h.safeTrimTrailingSeparator(e),h.dirname(e)===e?this.rootRegExp.test(e):this.minimatch.matchOne(e.split(b?/\\+/:/\/+/),this.minimatch.set[0],!0)}static globEscape(e){return(b?e:e.replace(/\\/g,"\\\\")).replace(/(\[)(?=[^/]+\])/g,"[[]").replace(/\?/g,"[?]").replace(/\*/g,"[*]")}static fixupPattern(e,t){d.default(e,"pattern cannot be empty");const r=new y.Path(e).segments.map((e=>g.getLiteral(e)));if(d.default(r.every(((e,t)=>("."!==e||0===t)&&".."!==e)),`Invalid pattern '${e}'. Relative pathing '.' and '..' is not allowed.`),d.default(!h.hasRoot(e)||r[0],`Invalid pattern '${e}'. Root segment must not contain globs.`),"."===(e=h.normalizeSeparators(e))||e.startsWith("."+u.sep))e=g.globEscape(process.cwd())+e.substr(1);else if("~"===e||e.startsWith("~"+u.sep))t=t||l.homedir(),d.default(t,"Unable to determine HOME directory"),d.default(h.hasAbsoluteRoot(t),`Expected HOME directory to be a rooted path. Actual '${t}'`),e=g.globEscape(t)+e.substr(1);else if(b&&(e.match(/^[A-Z]:$/i)||e.match(/^[A-Z]:[^\\]/i))){let t=h.ensureAbsoluteRoot("C:\\dummy-root",e.substr(0,2));e.length>2&&!t.endsWith("\\")&&(t+="\\"),e=g.globEscape(t)+e.substr(2)}else if(b&&("\\"===e||e.match(/^\\[^\\]/))){let t=h.ensureAbsoluteRoot("C:\\dummy-root","\\");t.endsWith("\\")||(t+="\\"),e=g.globEscape(t)+e.substr(1)}else e=h.ensureAbsoluteRoot(g.globEscape(process.cwd()),e);return h.normalizeSeparators(e)}static getLiteral(e){let t="";for(let r=0;e.length>r;r++){const o=e[r];if("\\"!==o||b||r+1>=e.length){if("*"===o||"?"===o)return"";if("["===o&&e.length>r+1){let o="",s=-1;for(let t=r+1;e.length>t;t++){const r=e[t];if("\\"!==r||b||t+1>=e.length){if("]"===r){s=t;break}o+=r}else o+=e[++t]}if(s>=0){if(o.length>1)return"";if(o){t+=o,r=s;continue}}}t+=o}else t+=e[++r]}return t}static regExpEscape(e){return e.replace(/[[\\^$.|?*+()]/g,"\\$&")}}e.exports.Pattern=g})),p.register("i7Uxm",(function(e,t){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),a=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)"default"!==s&&Object.hasOwnProperty.call(e,s)&&r(t,e,s);return o(t,e),t}),i=e.exports&&e.exports.__importDefault||(e=>e&&e.__esModule?e:{default:e});Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Path=void 0;const c=a(s),l=a(p("aXEcz")),u=i(n),h="win32"===process.platform;e.exports.Path=class{constructor(e){if(this.segments=[],"string"==typeof e)if(u.default(e,"Parameter 'itemPath' must not be empty"),e=l.safeTrimTrailingSeparator(e),l.hasRoot(e)){let t=e,r=l.dirname(t);for(;r!==t;){const e=c.basename(t);this.segments.unshift(e),t=r,r=l.dirname(t)}this.segments.unshift(t)}else this.segments=e.split(c.sep);else{u.default(e.length>0,"Parameter 'itemPath' must not be an empty array");for(let t=0;e.length>t;t++){let r=e[t];u.default(r,"Parameter 'itemPath' must not contain any empty segments"),r=l.normalizeSeparators(e[t]),0===t&&l.hasRoot(r)?(r=l.safeTrimTrailingSeparator(r),u.default(r===l.dirname(r),"Parameter 'itemPath' root segment contains information for multiple segments"),this.segments.push(r)):(u.default(!r.includes(c.sep),"Parameter 'itemPath' contains unexpected path separators"),this.segments.push(r))}}}toString(){let e=this.segments[0],t=e.endsWith(c.sep)||h&&/^[A-Z]:$/i.test(e);for(let r=1;this.segments.length>r;r++)t?t=!1:e+=c.sep,e+=this.segments[r];return e}}})),p.register("e51CO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.SearchState=void 0,e.exports.SearchState=class{constructor(e,t){this.path=e,this.level=t}}})),p.register("c7nrF",(function(e,t){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?(e,t,r,o)=>{void 0===o&&(o=r),Object.defineProperty(e,o,{enumerable:!0,get(){return t[r]}})}:(e,t,r,o)=>{void 0===o&&(o=r),e[o]=t[r]}),a=e.exports&&e.exports.__setModuleDefault||(Object.create?(e,t)=>{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:(e,t)=>{e.default=t}),n=e.exports&&e.exports.__importStar||(e=>{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.hasOwnProperty.call(e,o)&&r(t,e,o);return a(t,e),t}),u=e.exports&&e.exports.__awaiter||((e,t,r,o)=>new(r||(r=Promise))(((s,a)=>{function i(e){try{c(o.next(e))}catch(e){a(e)}}function n(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((e=>{e(t)}))).then(i,n)}c((o=o.apply(e,t||[])).next())}))),h=e.exports&&e.exports.__asyncValues||function(e){function t(t){r[t]=e[t]&&(r=>new Promise(((o,s)=>{((e,t,r,o)=>{Promise.resolve(o).then((t=>{e({value:t,done:r})}),t)})(o,s,(r=e[t](r)).done,r.value)})))}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=e[Symbol.asyncIterator];return o?o.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),r={},t("next"),t("throw"),t("return"),r[Symbol.asyncIterator]=function(){return this},r)};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.hashFiles=void 0;const d=n(c),f=n(p("9bqVn")),m=n(i),y=n(l),b=n(o),g=n(s);e.exports.hashFiles=function(e){var t,r,o;return u(this,void 0,void 0,(function*(){let s=!1;const a=null!==(o=process.env.GITHUB_WORKSPACE)&&void 0!==o?o:process.cwd(),i=d.createHash("sha256");let n=0;try{for(var c,l=h(e.globGenerator());!(c=yield l.next()).done;){const e=c.value;if(f.debug(e),!e.startsWith(`${a}${g.sep}`)){f.debug(`Ignore '${e}' since it is not under GITHUB_WORKSPACE.`);continue}if(m.statSync(e).isDirectory()){f.debug(`Skip directory '${e}'.`);continue}const t=d.createHash("sha256"),r=b.promisify(y.pipeline);yield r(m.createReadStream(e),t),i.write(t.digest()),n++,s||(s=!0)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(r=l.return)&&(yield r.call(l))}finally{if(t)throw t.error}}return i.end(),s?(f.debug(`Found ${n} files to hash.`),i.digest("hex")):(f.debug("No matches found for glob"),"")}))}})),p.register("c3SoR",(function(t,r){e(t.exports,"default",(()=>i));var o=p("lwNDb"),s=p("9bqVn");let a;(e=>{e.STATE_CACHE_PRIMARY_KEY="cache-primary-key",e.CACHE_MATCHED_KEY="cache-matched-key",e.CACHE_PATHS="cache-paths"})(a||(a={}));var i=class{constructor(e,t){this.packageManager=e,this.cacheDependencyPath=t,this.CACHE_KEY_PREFIX="setup-python"}async restoreCache(){const{primaryKey:e,restoreKey:t}=await this.computeKeys();if(e.endsWith("-"))throw Error(`No file in ${process.cwd()} matched to [${this.cacheDependencyPath.split("\n").join(",")}], make sure you have checked out the target repository`);const r=await this.getCacheGlobalDirectories();s.saveState(a.CACHE_PATHS,r),s.saveState(a.STATE_CACHE_PRIMARY_KEY,e);const i=await o.restoreCache(r,e,t);this.handleMatchResult(i,e)}handleMatchResult(e,t){e?(s.saveState(a.CACHE_MATCHED_KEY,e),s.info("Cache restored from key: "+e)):s.info(this.packageManager+" cache is not found"),s.setOutput("cache-hit",e===t)}}})),p.register("gyWii",(function(t,r){e(t.exports,"default",(()=>c));var o=p("b5WCL"),i=p("9bqVn"),n=p("c3SoR"),c=class extends n.default{constructor(e,t="**/Pipfile.lock"){super("pipenv",t),this.pythonVersion=e,this.patterns=t}async getCacheGlobalDirectories(){let e;e="win32"===process.platform?".virtualenvs":".local/share/virtualenvs";const t=s.join(a.homedir(),e);return i.debug("global cache directory path is "+t),[t]}async computeKeys(){const e=await o.hashFiles(this.patterns);return{primaryKey:`${this.CACHE_KEY_PREFIX}-${process.env.RUNNER_OS}-python-${this.pythonVersion}-${this.packageManager}-${e}`,restoreKey:void 0}}}})),p.register("9rlmk",(function(t,r){e(t.exports,"default",(()=>n));var o=p("b5WCL"),a=p("ca0ts"),i=p("c3SoR"),n=class extends i.default{constructor(e,t="**/poetry.lock"){super("poetry",t),this.pythonVersion=e,this.patterns=t}async getCacheGlobalDirectories(){const e=await this.getPoetryConfiguration(),t=[e["virtualenvs.path"].replace("{cache-dir}",e["cache-dir"])];return!0===e["virtualenvs.in-project"]&&t.push(s.join(process.cwd(),".venv")),t}async computeKeys(){const e=await o.hashFiles(this.patterns);return{primaryKey:`${this.CACHE_KEY_PREFIX}-${process.env.RUNNER_OS}-python-${this.pythonVersion}-${this.packageManager}-${e}`,restoreKey:void 0}}async getPoetryConfiguration(){const{stdout:e,stderr:t,exitCode:r}=await a.getExecOutput("poetry",["config","--list"]);if(r&&t)throw Error("Could not get cache folder path for poetry package manager");const o=e.trim().split("\n"),s={};for(let e of o){e=e.replace(/#.*$/,"");const[t,r]=e.split("=").map((e=>e.trim()));s[t]=JSON.parse(r)}return s}}}));
//# sourceMappingURL=cache.32a23f6d.js.map
