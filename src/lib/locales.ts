export const LOCALES = ['en', 'jp', 'id'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_PREFIXES: Record<Locale, string> = {
  en: '',
  jp: '/jp',
  id: '/id',
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  jp: '日本語',
  id: 'ID',
};

export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en',
  jp: 'ja',
  id: 'id',
};

export function getLocalePrefix(locale: Locale): string {
  return LOCALE_PREFIXES[locale];
}

export function localizePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withoutLocale = cleanPath.replace(/^\/(jp|id)(?=\/|$)/, '') || '/';
  const prefix = getLocalePrefix(locale);
  if (withoutLocale === '/') return prefix || '/';
  return `${prefix}${withoutLocale}`;
}

export const uiCopy = {
  en: {
    siteTitle: 'SympleHost Knowledge Base',
    titleSuffix: 'SympleHost Knowledge Base',
    defaultDescription: 'Browse our guides and tutorials to get the most out of SympleHost.',
    homeTitle: 'How can we help?',
    homeDescription: 'Browse our guides and tutorials to get the most out of SympleHost.',
    allTopics: 'All Topics',
    knowledgeBase: 'Knowledge Base',
    pricing: 'Pricing',
    blog: 'Blog',
    contact: 'Contact us',
    language: 'Language',
    articles: 'Articles',
    article: 'article',
    integrations: 'integrations',
    videos: 'Videos',
    videoDescription: 'Welcome videos, product tutorials, and focused walkthroughs.',
    webinars: 'Webinars',
    webinarDescription: 'Live sessions, customer success hours, and webinar recordings.',
    recordings: 'recordings',
    upcoming: 'upcoming',
    walkthroughs: 'walkthroughs',
    articlesHubDescription: 'STR market trends and marketing playbooks for short-term rental hosts.',
    updated: 'Updated',
    noArticles: 'No articles in this category yet.',
    searchFaqs: 'Search frequently asked questions...',
    searchFaqsLabel: 'Search FAQs',
    questions: 'questions',
    noFaqMatches: 'No questions match your search.',
    browseByTopic: 'Browse by topic',
    localeNoticeTitle: '',
    localeNoticeBody: '',
    copyright: 'All rights reserved.',
  },
  jp: {
    siteTitle: 'SympleHost ナレッジベース',
    titleSuffix: 'SympleHost ナレッジベース',
    defaultDescription: 'SympleHostを最大限に活用するためのガイドとチュートリアルをご覧ください。',
    homeTitle: 'どのようなことでお困りですか？',
    homeDescription: '日本の宿泊運営チーム向けに、SympleHostの設定、予約管理、自動化、連携をわかりやすくまとめました。',
    allTopics: 'すべてのトピック',
    knowledgeBase: 'ナレッジベース',
    pricing: '料金',
    blog: 'ブログ',
    contact: 'お問い合わせ',
    language: '言語',
    articles: '記事',
    article: '記事',
    integrations: '連携',
    videos: '動画',
    videoDescription: '初期設定、製品チュートリアル、機能別のウォークスルーを確認できます。',
    webinars: 'ウェビナー',
    webinarDescription: 'ライブセッション、カスタマーサクセスアワー、録画済みウェビナーを確認できます。',
    recordings: '録画',
    upcoming: '開催予定',
    walkthroughs: 'ウォークスルー',
    articlesHubDescription: '民泊・短期賃貸運営者向けの市場トレンドとマーケティング実践ガイド。',
    updated: '更新日',
    noArticles: 'このカテゴリーの記事はまだありません。',
    searchFaqs: 'よくある質問を検索...',
    searchFaqsLabel: 'FAQを検索',
    questions: '件の質問',
    noFaqMatches: '検索条件に一致する質問はありません。',
    browseByTopic: 'トピック別に見る',
    localeNoticeTitle: '日本語版を準備中です',
    localeNoticeBody: '画面表示とナビゲーションは日本語化済みです。記事本文は順次、日本市場向けの表現に更新していきます。',
    copyright: 'All rights reserved.',
  },
  id: {
    siteTitle: 'Basis Pengetahuan SympleHost',
    titleSuffix: 'Basis Pengetahuan SympleHost',
    defaultDescription: 'Jelajahi panduan dan tutorial untuk memaksimalkan penggunaan SympleHost.',
    homeTitle: 'Ada yang bisa kami bantu?',
    homeDescription: 'Panduan praktis untuk menyiapkan, mengelola, dan mengembangkan operasional properti dengan SympleHost.',
    allTopics: 'Semua Topik',
    knowledgeBase: 'Basis Pengetahuan',
    pricing: 'Harga',
    blog: 'Blog',
    contact: 'Hubungi kami',
    language: 'Bahasa',
    articles: 'Artikel',
    article: 'artikel',
    integrations: 'integrasi',
    videos: 'Video',
    videoDescription: 'Video sambutan, tutorial produk, dan walkthrough fitur.',
    webinars: 'Webinar',
    webinarDescription: 'Sesi live, customer success hour, dan rekaman webinar.',
    recordings: 'rekaman',
    upcoming: 'mendatang',
    walkthroughs: 'walkthrough',
    articlesHubDescription: 'Tren pasar STR dan playbook pemasaran untuk host sewa jangka pendek.',
    updated: 'Diperbarui',
    noArticles: 'Belum ada artikel di kategori ini.',
    searchFaqs: 'Cari pertanyaan umum...',
    searchFaqsLabel: 'Cari FAQ',
    questions: 'pertanyaan',
    noFaqMatches: 'Tidak ada pertanyaan yang cocok dengan pencarian Anda.',
    browseByTopic: 'Jelajahi berdasarkan topik',
    localeNoticeTitle: 'Konten Indonesia sedang disiapkan',
    localeNoticeBody: 'Navigasi dan antarmuka sudah dilokalkan. Isi artikel akan diperbarui bertahap untuk pasar Indonesia.',
    copyright: 'All rights reserved.',
  },
} satisfies Record<Locale, Record<string, string>>;

type CategoryText = {
  title: string;
  description?: string;
};

export const categoryCopy: Record<Locale, Record<string, CategoryText>> = {
  en: {},
  jp: {
    'getting-started': {
      title: 'SympleHostを始める',
      description: 'アカウント設定から物件管理の開始まで、最初に必要な手順をまとめました。',
    },
    'platform-guides': {
      title: 'SympleHostプラットフォームガイド',
      description: 'SympleHostの各機能を使いこなすためのステップ別ガイドです。',
    },
    'ai-and-api': {
      title: 'AI・API',
      description: 'AIアシスタントや開発者向け連携とSympleHostを接続します。',
    },
    faqs: {
      title: 'よくある質問',
      description: 'SympleHostについて宿泊運営者からよく寄せられる質問への回答です。',
    },
    integrations: {
      title: '連携',
      description: '外部のダイナミックプライシングツールなど、収益管理連携の設定ガイドです。',
    },
    'marketing-for-hosts': {
      title: '宿泊運営者向けマーケティング',
      description: '予約数を伸ばすための実践的なマーケティングプレイブックです。',
    },
    'str-market-trends': {
      title: '短期賃貸市場トレンド',
      description: 'アジア太平洋地域の民泊・短期賃貸市場データ、トレンド、見通しです。',
    },
  },
  id: {
    'getting-started': {
      title: 'Mulai dengan SympleHost',
      description: 'Semua yang Anda butuhkan untuk menyiapkan akun dan mulai mengelola properti.',
    },
    'platform-guides': {
      title: 'Panduan Platform SympleHost',
      description: 'Panduan langkah demi langkah untuk menguasai setiap fitur di SympleHost.',
    },
    'ai-and-api': {
      title: 'AI & API',
      description: 'Hubungkan SympleHost ke asisten AI dan integrasi developer.',
    },
    faqs: {
      title: 'FAQ',
      description: 'Jawaban cepat untuk pertanyaan paling umum dari host tentang SympleHost.',
    },
    integrations: {
      title: 'Integrasi',
      description: 'Integrasi revenue management untuk host yang memakai dynamic pricing eksternal.',
    },
    'marketing-for-hosts': {
      title: 'Pemasaran untuk Host',
      description: 'Playbook pemasaran praktis untuk membantu host mendapatkan lebih banyak booking.',
    },
    'str-market-trends': {
      title: 'Tren Pasar STR',
      description: 'Data, tren, dan outlook pasar rental liburan untuk host di Asia-Pasifik.',
    },
  },
};

export const sectionCopy: Record<Locale, Record<string, string>> = {
  en: {},
  jp: {
    'Start here': 'まずはこちら',
    'Set up your account': 'アカウント設定',
    'Know your workspace': 'ワークスペースを理解する',
    'Your first reservations': '最初の予約',
    'Messaging & guest communication': 'メッセージ・ゲスト対応',
    'Bookings & reservations': '予約管理',
    'Listings & pricing': 'リスティング・料金',
    Services: 'サービス',
    'Quotes & payments': '見積もり・決済',
    'Tasks & operations': 'タスク・運営',
    'AI assistants': 'AIアシスタント',
    'Developer API': '開発者API',
    'Revenue management': '収益管理',
  },
  id: {
    'Start here': 'Mulai di sini',
    'Set up your account': 'Siapkan akun',
    'Know your workspace': 'Kenali workspace Anda',
    'Your first reservations': 'Reservasi pertama',
    'Messaging & guest communication': 'Pesan & komunikasi tamu',
    'Bookings & reservations': 'Booking & reservasi',
    'Listings & pricing': 'Listing & harga',
    Services: 'Layanan',
    'Quotes & payments': 'Penawaran & pembayaran',
    'Tasks & operations': 'Tugas & operasional',
    'AI assistants': 'Asisten AI',
    'Developer API': 'API Developer',
    'Revenue management': 'Revenue management',
  },
};

type ArticleText = {
  title: string;
  description?: string;
};

export const articleCopy: Record<Locale, Record<string, ArticleText>> = {
  en: {},
  jp: {
    'add-multi-unit-listing-for-bookingcom': {
      title: '複数ユニットのリスティングを手動で追加する',
      description: 'ゲストハウス、小規模ホテル、アパートなど、複数の予約可能な部屋やユニットを持つ物件を設定します。',
    },
    'add-team-members-and-roles': {
      title: 'チームメンバーを追加し、権限を割り当てる',
      description: 'チームをSympleHostアカウントに招待し、役割ベースの権限で各メンバーが閲覧・操作できる範囲を管理します。',
    },
    'adding-a-listing-manually': {
      title: 'リスティングを手動で追加する',
      description: '物件情報、写真、設備、キャンセルポリシーを入力して、新しい宿泊リスティングを作成します。',
    },
    'adding-direct-bookings': {
      title: '直接予約を追加する',
      description: '自社サイト、リピーター、紹介などOTA外の予約をSympleHostに登録し、AirbnbやBooking.comの予約と同じカレンダーで管理します。',
    },
    'asia-pacific-str-overview': {
      title: 'アジア太平洋の民泊・短期賃貸市場 2026年版',
      description: '2026年のアジア太平洋の短期賃貸市場トレンド、Airbnbデータ、バリ、オーストラリア、インド、タイの宿泊運営者に起きている変化を解説します。',
    },
    'australia-nz-str-trends': {
      title: 'オーストラリア・ニュージーランドの短期賃貸市場 2026年版',
      description: '収益、稼働率、規制、AI活用など、ANZ地域の宿泊運営者が知っておくべき2026年の変化をまとめます。',
    },
    'bali-str-trends': {
      title: 'バリのAirbnb・バケーションレンタル市場 2026年版',
      description: '84,000件を超えるリスティング、平均稼働率、収益トレンド、上位ホストが差をつけているポイントを解説します。',
    },
    'beyond-pricing-integration': {
      title: 'SympleHost + Beyond Pricing 収益管理連携',
      description: 'Beyond Pricingの収益管理ワークフローとSympleHostのカレンダー、予約、運営管理をつなぐ予定の連携機能です。',
    },
    'connect-symplehost-to-ai-assistants': {
      title: 'SympleHostをClaudeなどのAIアシスタントに接続する',
      description: 'MCP対応のAIツールから物件、予約、ゲスト情報を自然言語で確認し、返信作成やタスク管理を安全に支援させる方法を説明します。',
    },
    'connecting-messaging-integrations': {
      title: 'WhatsApp、Instagram、Facebook Messengerを接続する',
      description: 'WhatsApp Business、Instagram、Facebook MessengerをSympleHostに接続する手順を、Metaの認証画面や権限確認を含めて説明します。',
    },
    'create-and-assign-tasks': {
      title: 'チームにタスクを作成・割り当てる',
      description: '清掃、メンテナンス、カスタムタスクを作成し、担当者と期限を設定して運営をスムーズに管理します。',
    },
    'creating-a-reservation-manually': {
      title: '予約を手動で作成する',
      description: '手動予約の作成方法、予約ステータスの意味、カレンダー上での表示を確認します。',
    },
    'creating-and-managing-services': {
      title: 'サービスを作成・管理する',
      description: '体験、ツアー、送迎などの予約可能なサービスを宿泊リスティングと一緒に販売・管理します。',
    },
    'creating-your-account': {
      title: 'アカウント作成とオンボーディングを完了する',
      description: 'SympleHostに登録し、プロフィール、会社情報、チーム設定を数分で完了します。',
    },
    'direct-bookings-vacation-rentals': {
      title: 'バケーションレンタルで直接予約を増やす方法',
      description: 'OTA手数料を減らし利益率を上げるために、Airbnb依存を下げて直接予約チャネルを育てる実践ガイドです。',
    },
    'dynamic-pricing-short-term-rentals-sea': {
      title: '短期賃貸のダイナミックプライシング完全ガイド',
      description: '稼働率だけでは見えない価格設定の課題と、インドネシア、タイ、ベトナムの季節性・需要に合わせた価格調整を解説します。',
    },
    'facebook-marketing-vacation-rentals': {
      title: 'バケーションレンタル向けFacebookマーケティング',
      description: 'グループ、広告、Messenger自動化を使って、宿泊予約につながるFacebook運用を設計します。',
    },
    'faqs-account-and-setup': {
      title: 'アカウント・初期設定FAQ',
      description: '登録、ログイン、プロフィール・会社設定、アカウントセキュリティに関するよくある質問です。',
    },
    'faqs-bookings-and-calendar': {
      title: '予約・カレンダーFAQ',
      description: '予約作成、確定・キャンセル、ステータス、複数物件のカレンダー管理に関する質問です。',
    },
    'faqs-integrations-and-troubleshooting': {
      title: '連携・チャネル・レビュー・トラブルシューティングFAQ',
      description: 'AirbnbやBooking.com連携、レビュー管理、同期や表示に関するよくある問題をまとめました。',
    },
    'faqs-listings-pricing-multi-unit': {
      title: 'リスティング・料金・複数ユニットFAQ',
      description: 'リスティングの追加・編集・価格設定と、Booking.com向け複数ユニット物件の扱いを説明します。',
    },
    'faqs-messaging-autopilot-guest-experience': {
      title: 'メッセージ・Autopilot・ゲスト体験FAQ',
      description: 'WhatsApp、Instagram、Facebook連携、AI返信、ゲストブックやおすすめ設定に関する質問です。',
    },
    'faqs-team-operations-payments': {
      title: 'チーム・運営・決済・WebサイトFAQ',
      description: '権限、タスク、自動化、Stripe決済、直接予約サイト、見積もり、通知に関する質問です。',
    },
    'guest-communication-whatsapp-automation-playbook': {
      title: 'ゲスト対応を拡張するWhatsApp自動化プレイブック',
      description: '返信を速くし、反復メッセージを減らし、ゲスト体験を改善するためのWhatsApp自動化ガイドです。',
    },
    'guest-reviews-to-bookings': {
      title: 'ゲストレビューを予約につなげる方法',
      description: '5つ星レビューを増やし、各チャネルで社会的証明として活用し、リピーター予約につなげる方法を解説します。',
    },
    'hidden-cost-managing-rentals-across-countries': {
      title: '複数国で宿泊施設を管理する隠れたコスト',
      description: '国をまたぐ短期賃貸運営が、標準化されたシステムなしでは高コストで不安定になる理由を説明します。',
    },
    'how-to-create-and-manage-quotations': {
      title: '見積もりを作成・管理する',
      description: 'プロフェッショナルな料金提案を作成し、ゲストに送信し、ステータスと支払いをSympleHost上で管理します。',
    },
    'import-listings-from-ota': {
      title: 'OTAからリスティングをインポートする',
      description: 'AirbnbやBooking.comの既存リスティングを取り込み、SympleHostで一から作り直す手間を省きます。',
    },
    'inbox-communicate-with-guests': {
      title: 'Inboxでゲストとやり取りする',
      description: 'すべてのゲスト会話を一か所で確認し、複数チャネルに返信し、AI支援でコミュニケーションを整理します。',
    },
    'india-str-trends': {
      title: 'インドのバケーションレンタル・Airbnb市場 2026年版',
      description: '高成長が続くインド市場の需要、注目エリア、早期参入者の優位性を解説します。',
    },
    'instagram-marketing-vacation-rentals': {
      title: 'バケーションレンタル向けInstagramマーケティング',
      description: 'Reels、Stories、ハッシュタグ、問い合わせ自動化を使い、Instagramを予約獲得チャネルに育てます。',
    },
    'manage-bookings-and-calendar': {
      title: '予約とカレンダーを管理する',
      description: 'すべての予約を1つのカレンダーで確認し、手動予約を作成し、チェックイン・チェックアウトに合わせてステータスを更新します。',
    },
    'manual-guest-messaging-killing-margins': {
      title: '手動のゲスト対応が利益率を下げる理由',
      description: '遅い返信、反復質問、アップセル機会の損失、チームの詰まりが収益性に与える影響を説明します。',
    },
    'multi-channel-distribution-sea-rentals': {
      title: '東南アジア宿泊施設のマルチチャネル販売ガイド',
      description: 'Airbnb、Booking.com、直接予約、WhatsAppを併用しながら、二重予約や運営混乱を避ける方法を解説します。',
    },
    'navigating-symplehost': {
      title: 'SympleHostの画面構成と各機能の場所',
      description: 'サイドバー、主要セクション、設定画面を確認し、必要な機能に迷わずアクセスできるようにします。',
    },
    'onboard-new-property-under-an-hour': {
      title: '新しい物件を1時間以内にオンボーディングする方法',
      description: '新しいヴィラ、アパート、ゲストハウスを管理システムに追加するための実践的な1時間チェックリストです。',
    },
    'pricelabs-integration': {
      title: 'PriceLabsをSympleHostに連携する',
      description: 'PriceLabsとSympleHostを接続し、料金、空室、制限、予約、ブロック、収益管理設定を同期します。',
    },
    'set-up-payments-stripe': {
      title: 'Stripe決済を設定する',
      description: 'StripeをSympleHostアカウントに接続し、直接予約、サービス、ストア商品の支払いを受け付けます。',
    },
    'set-up-pricing-and-rate-rules': {
      title: '料金とレートルールを設定する',
      description: '宿泊料金、季節別レートプラン、人数別料金を設定し、年間を通じて正しく価格管理します。',
    },
    'set-up-recurring-task-reminders': {
      title: '繰り返しタスクリマインダーを設定する',
      description: 'チェックアウト後清掃や月次点検などの反復タスクを自動化し、WhatsAppリマインダーを設定します。',
    },
    'setting-up-autopilot': {
      title: 'Autopilotを設定してゲストメッセージを自動化する',
      description: 'SympleHostのAI Autopilotを設定し、よくある質問への自動返信で24時間の対応負荷を減らします。',
    },
    'setting-up-company-profile': {
      title: '会社プロフィールを設定する',
      description: '会社名、国、通貨、タイムゾーン、表示設定を登録し、SympleHostを自社運営に合わせます。',
    },
    'short-term-rental-metrics-hosts-should-track': {
      title: '短期賃貸ホストが追うべき12の指標',
      description: '稼働率、ADR、RevPAR、予約ペース、チャネル構成、返信時間、レビュー評価、運営コストなどの主要指標を解説します。',
    },
    'symplehost-partner-api-reference': {
      title: 'SympleHost Partner APIリファレンス',
      description: 'Partner APIの用途、公開データ、認証方式、完全なAPIリファレンスの開き方を説明します。',
    },
    'thailand-str-trends': {
      title: 'タイのバケーションレンタル・Airbnb市場 2026年版',
      description: '需要が供給を上回るタイ市場、主要エリアの収益データ、デジタルノマド需要の機会を解説します。',
    },
    'track-task-progress': {
      title: 'タスクの進捗と完了状況を追跡する',
      description: '完了、期限超過、進行中のタスクを確認し、担当者や日付で絞り込んで運営状況を把握します。',
    },
    'understanding-the-overview-dashboard': {
      title: '概要ダッシュボードを理解する',
      description: 'ダッシュボード上の各指標の意味と、毎日の確認起点としての使い方を説明します。',
    },
    'viewing-your-first-reservation': {
      title: '最初の予約を確認する',
      description: 'ゲスト予約が入ったときに予約詳細を開き、各項目を理解し、次に取るべき対応を確認します。',
    },
    'welcome-to-symplehost': {
      title: 'SympleHostへようこそ：最初の15分',
      description: 'SympleHostでできること、各機能の場所、最初に設定すべき項目を短時間で把握します。',
    },
    'what-is-revpar-short-term-rentals': {
      title: 'RevPARとは？東南アジアのホストが稼働率より重視すべき理由',
      description: 'RevPARの計算式、具体例、稼働率だけでは価格設定の弱さを見落とす理由をわかりやすく説明します。',
    },
  },
  id: {},
};

export function getCategoryTitle(category: { id: string; data: { title: string } }, locale: Locale): string {
  return categoryCopy[locale][category.id]?.title ?? category.data.title;
}

export function getCategoryDescription(
  category: { id: string; data: { description?: string } },
  locale: Locale,
): string | undefined {
  return categoryCopy[locale][category.id]?.description ?? category.data.description;
}

export function getSectionTitle(section: string, locale: Locale): string {
  return sectionCopy[locale][section] ?? section;
}

export function getArticleTitle(article: { id: string; data: { title: string } }, locale: Locale): string {
  return articleCopy[locale][article.id]?.title ?? article.data.title;
}

export function getArticleDescription(
  article: { id: string; data: { description?: string } },
  locale: Locale,
): string | undefined {
  return articleCopy[locale][article.id]?.description ?? article.data.description;
}

export function countLabel(count: number, singular: string, plural: string, locale: Locale): string {
  if (locale === 'jp') return `${count}件`;
  if (locale === 'id') return `${count} ${singular}`;
  return `${count} ${count === 1 ? singular : plural}`;
}
