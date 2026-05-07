// 30天全不重复学习路径 (Master Vocabulary List)
const MASTER_SCHEDULE = [
  // 阶段 1: 晨起与家内活动 (Day 1-10)
  { scene: "早上问候", icon: "☀️", words: ["Morning /'mɔːnɪŋ/", "Sun /sʌn/"], dialogs: [{ english: "Good morning!", chinese: "早上好！" }, { english: "Wake up, baby!", chinese: "起床啦！" }], tip: "拉窗帘，迎接阳光" },
  { scene: "吃早餐", icon: "🥛", words: ["Milk /mɪlk/", "Bread /bred/"], dialogs: [{ english: "Drink your milk.", chinese: "喝牛奶。" }, { english: "Eat the bread.", chinese: "吃面包。" }], tip: "准备好健康早餐" },
  { scene: "刷牙洗脸", icon: "🪥", words: ["Brush /brʌʃ/", "Teeth /tiːθ/"], dialogs: [{ english: "Brush your teeth.", chinese: "刷牙。" }, { english: "Nice and clean.", chinese: "干净啦。" }], tip: "对着镜子一起刷" },
  { scene: "换衣服", icon: "👕", words: ["Shirt /ʃɜːt/", "Pants /pænts/"], dialogs: [{ english: "Put on your shirt.", chinese: "穿上衬衫。" }, { english: "Put on your pants.", chinese: "穿上裤子。" }], tip: "鼓励自主穿衣" },
  { scene: "看绘本", icon: "📖", words: ["Look /lʊk/", "Book /bʊk/"], dialogs: [{ english: "Read a book.", chinese: "看书。" }, { english: "It's a cat.", chinese: "这是猫咪。" }], tip: "模仿动物叫声" },
  { scene: "玩积木", icon: "🧱", words: ["Blocks /blɒks/", "Build /bɪld/"], dialogs: [{ english: "Build a tower.", chinese: "搭高塔。" }, { english: "It's tall!", chinese: "好高啊！" }], tip: "比比谁搭得高" },
  { scene: "遥控车", icon: "🏎️", words: ["Car /kɑːr/", "Fast /fɑːst/"], dialogs: [{ english: "Drive the car.", chinese: "开车。" }, { english: "Go, go, go!", chinese: "快跑！" }], tip: "设置障碍物" },
  { scene: "画画", icon: "🎨", words: ["Draw /drɔː/", "Color /'kʌlər/"], dialogs: [{ english: "Draw a circle.", chinese: "画个圆。" }, { english: "Use the red.", chinese: "用红色。" }], tip: "随意涂鸦" },
  { scene: "洗手", icon: "🧼", words: ["Soap /səʊp/", "Wash /wɒʃ/"], dialogs: [{ english: "Wash your hands.", chinese: "洗洗手。" }, { english: "Soap bubbles.", chinese: "洗手液泡泡。" }], tip: "数数洗手时间" },
  { scene: "晚安故事", icon: "🌙", words: ["Bed /bed/", "Sleep /sliːp/"], dialogs: [{ english: "Time for bed.", chinese: "睡觉时间到。" }, { english: "Sweet dreams.", chinese: "做个好梦。" }], tip: "轻声细语" },

  // 阶段 2: 户外与探索 (Day 11-20)
  { scene: "去公园", icon: "🌳", words: ["Park /pɑːk/", "Tree /triː/"], dialogs: [{ english: "Go to the park.", chinese: "去公园。" }, { english: "See the tree.", chinese: "看树。" }], tip: "观察大自然" },
  { scene: "天气预报", icon: "☁️", words: ["Weather /'weðər/", "Sunny /'sʌni/"], dialogs: [{ english: "How's the weather?", chinese: "天气怎么样？" }, { english: "It's sunny.", chinese: "阳光灿烂。" }], tip: "指指窗外" },
  { scene: "滑滑梯", icon: "🛝", words: ["Slide /slaɪd/", "Down /daʊn/"], dialogs: [{ english: "Go down the slide.", chinese: "滑滑梯。" }, { english: "So fun!", chinese: "太好玩啦！" }], tip: "排队滑滑梯" },
  { scene: "玩球", icon: "⚽", words: ["Ball /bɔːl/", "Kick /kɪk/"], dialogs: [{ english: "Kick the ball.", chinese: "踢球。" }, { english: "Catch it!", chinese: "接住！" }], tip: "传球游戏" },
  { scene: "看小鸟", icon: "🐦", words: ["Bird /bɜːrd/", "Fly /flaɪ/"], dialogs: [{ english: "Look, a bird!", chinese: "看，小鸟！" }, { english: "It can fly.", chinese: "它会飞。" }], tip: "模仿翅膀" },
  { scene: "去超市", icon: "🛒", words: ["Shop /ʃɒp/", "Buy /baɪ/"], dialogs: [{ english: "Let's go shopping.", chinese: "去购物。" }, { english: "Buy an apple.", chinese: "买个苹果。" }], tip: "认识购物清单" },
  { scene: "坐小汽车", icon: "🚗", words: ["Car /kɑːr/", "Ride /raɪd/"], dialogs: [{ english: "Get in the car.", chinese: "上车。" }, { english: "Let's go!", chinese: "出发！" }], tip: "系好安全带" },
  { scene: "草地上走", icon: "🌿", words: ["Grass /ɡrɑːs/", "Walk /wɔːk/"], dialogs: [{ english: "Walk on grass.", chinese: "草地上走。" }, { english: "Soft grass.", chinese: "软软的草。" }], tip: "脱鞋感受" },
  { scene: "荡秋千", icon: "🪑", words: ["Swing /swɪŋ/", "Up /ʌp/"], dialogs: [{ english: "Swing up high.", chinese: "荡高高。" }, { english: "Push me!", chinese: "推我！" }], tip: "注意安全" },
  { scene: "回家", icon: "🏠", words: ["Home /həʊm/", "Back /bæk/"], dialogs: [{ english: "Time to go home.", chinese: "该回家啦。" }, { english: "Sweet home.", chinese: "温暖的家。" }], tip: "整理背包" },

  // 阶段 3: 情感与日常需求 (Day 21-30)
  { scene: "肚子饿", icon: "😋", words: ["Hungry /'hʌŋɡri/", "Food /fuːd/"], dialogs: [{ english: "I am hungry.", chinese: "我饿了。" }, { english: "What to eat?", chinese: "吃什么？" }], tip: "表达需求" },
  { scene: "要喝水", icon: "💧", words: ["Thirsty /'θɜːsti/", "Water /'wɔːtər/"], dialogs: [{ english: "I am thirsty.", chinese: "我渴了。" }, { english: "Drink water.", chinese: "喝水。" }], tip: "自主拿水杯" },
  { scene: "上厕所", icon: "🚽", words: ["Potty /'pɒti/", "Toilet /'tɔɪlət/"], dialogs: [{ english: "I need potty.", chinese: "要上厕所。" }, { english: "Go please.", chinese: "请去吧。" }], tip: "及时引导" },
  { scene: "开心", icon: "😊", words: ["Happy /'hæpi/", "Smile /smaɪl/"], dialogs: [{ english: "Are you happy?", chinese: "开心吗？" }, { english: "I am happy.", chinese: "我很开心。" }], tip: "展示笑容" },
  { scene: "难过", icon: "😢", words: ["Sad /sæd/", "Hug /hʌɡ/"], dialogs: [{ english: "Don't be sad.", chinese: "别难过。" }, { english: "Give a hug.", chinese: "抱抱。" }], tip: "安抚情绪" },
  { scene: "分享玩具", icon: "🧸", words: ["Share /ʃeər/", "Toy /tɔɪ/"], dialogs: [{ english: "Share the toy.", chinese: "分享玩具。" }, { english: "For you.", chinese: "给你。" }], tip: "练习礼貌" },
  { scene: "帮忙妈妈", icon: "💪", words: ["Help /help/", "Job /dʒɒb/"], dialogs: [{ english: "Let me help.", chinese: "我来帮忙。" }, { english: "Good job!", chinese: "做得好！" }], tip: "鼓励参与" },
  { scene: "好朋友", icon: "👫", words: ["Friend /frend/", "Play /pleɪ/"], dialogs: [{ english: "Play with me.", chinese: "和我玩。" }, { english: "My friend.", chinese: "我的朋友。" }], tip: "学会社交" },
  { scene: "说谢谢", icon: "🙏", words: ["Thank /θæŋk/", "Welcome /'welkəm/"], dialogs: [{ english: "Thank you.", chinese: "谢谢。" }, { english: "You're welcome.", chinese: "不客气。" }], tip: "礼貌用语" },
  { scene: "说晚安", icon: "💤", words: ["Night /naɪt/", "Dream /driːm/"], dialogs: [{ english: "Sleep tight.", chinese: "睡个好觉。" }, { english: "See you tomorrow.", chinese: "明天见。" }], tip: "睡前仪式" }
];

const curriculumLibrary = MASTER_SCHEDULE;
