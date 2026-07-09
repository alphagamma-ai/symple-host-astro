import type { CollectionEntry } from 'astro:content';
import { getArticleDescription, getArticleTitle, getSectionTitle, type Locale } from './locales';

type ArticleEntry = CollectionEntry<'articles'>;

const categoryFocus = {
  jp: {
    'getting-started': '初期設定を正しく進め、チームが同じ手順で運用を始められる状態にします。',
    'platform-guides': '日々の予約、ゲスト対応、タスク管理を迷わず進められるようにします。',
    'ai-and-api': 'AIアシスタントや開発者向け連携を安全に使うための考え方を整理します。',
    faqs: 'よくある疑問を短時間で確認し、次に取るべき対応を判断できるようにします。',
    integrations: '外部ツールとの連携で料金、空室、予約情報を安定して扱えるようにします。',
    'marketing-for-hosts': '予約獲得、ゲスト体験、リピートにつながる実践ポイントを整理します。',
    'str-market-trends': '市場データや運営トレンドを読み解き、価格設定や販売戦略の判断に活かします。',
  },
  id: {
    'getting-started': 'menyiapkan akun dengan benar agar tim dapat mulai bekerja dengan alur yang sama.',
    'platform-guides': 'mengelola reservasi, pesan tamu, listing, kalender, dan tugas operasional sehari-hari.',
    'ai-and-api': 'menggunakan asisten AI dan integrasi developer dengan cara yang aman dan terkontrol.',
    faqs: 'menjawab pertanyaan umum dengan cepat dan menentukan langkah berikutnya.',
    integrations: 'menghubungkan tool eksternal agar harga, ketersediaan, dan reservasi tetap sinkron.',
    'marketing-for-hosts': 'meningkatkan booking, pengalaman tamu, dan peluang repeat stay.',
    'str-market-trends': 'membaca data pasar dan tren operasional untuk keputusan harga serta distribusi.',
  },
} satisfies Record<Exclude<Locale, 'en'>, Record<string, string>>;

export function buildLocalizedArticleFallbackMarkdown(article: ArticleEntry, locale: Exclude<Locale, 'en'>): string {
  const title = getArticleTitle(article, locale);
  const description = getArticleDescription(article, locale);
  const section = article.data.section ? getSectionTitle(article.data.section, locale) : undefined;
  const focus = categoryFocus[locale][article.data.category] ?? categoryFocus[locale]['platform-guides'];

  if (locale === 'jp') {
    return [
      `**このガイドでは「${title}」について、日本の宿泊運営チーム向けに要点を整理します。**`,
      description ? `\n${description}` : '',
      '\n---',
      '\n## このページで確認できること',
      '',
      `- ${title}で扱う基本的な考え方`,
      section ? `- 「${section}」に関連する設定や確認ポイント` : '- 日々の運営で確認すべきポイント',
      '- SympleHost上で作業を進めるときの注意点',
      '- チームで運用を統一するための次のステップ',
      '\n## 進め方',
      '',
      '1. まず対象の物件、予約、ゲスト、または設定画面を確認します。',
      '2. 変更前に、現在のステータス、日付、料金、担当者、連携先を確認します。',
      '3. 必要な項目を更新し、保存後にカレンダーや関連画面にも反映されているか確認します。',
      '4. チームメンバーが関わる作業は、担当者と期限を明確にします。',
      '5. ゲストに影響する内容は、送信前に表記、日付、金額、案内内容を見直します。',
      '\n## 運用時のポイント',
      '',
      focus,
      '',
      '日本市場では、返信の早さ、正確なチェックイン案内、清掃品質、レビュー対応が特に重要です。SympleHostでは、予約、メッセージ、タスク、チーム権限を分けて確認することで、対応漏れを減らせます。',
      '\n## よくある確認事項',
      '',
      '- 予約日、チェックイン日、チェックアウト日が正しいか',
      '- 料金、通貨、追加費用が意図した表示になっているか',
      '- ゲスト向け案内が最新か',
      '- 担当者と期限が設定されているか',
      '- OTAや外部ツールと連携している場合、同期状況に問題がないか',
      '\n## 次のステップ',
      '',
      '関連する設定を更新したら、Overview、Calendar、Inbox、Tasksを確認し、運営上の抜け漏れがないかチェックしてください。必要に応じて、チームメンバーにも変更内容を共有します。',
    ].filter(Boolean).join('\n');
  }

  return [
    `**Panduan ini merangkum "${title}" untuk tim host dan operator properti yang menggunakan SympleHost.**`,
    description ? `\n${description}` : '',
    '\n---',
    '\n## Yang Dibahas',
    '',
    `- Konsep utama dalam ${title}`,
    section ? `- Pengaturan dan pengecekan yang terkait dengan "${section}"` : '- Poin penting untuk operasional harian',
    '- Hal yang perlu dicek saat bekerja di SympleHost',
    '- Langkah berikutnya agar alur kerja tim tetap rapi',
    '\n## Cara Mengerjakannya',
    '',
    '1. Buka properti, reservasi, tamu, atau halaman pengaturan yang ingin dikelola.',
    '2. Sebelum mengubah data, cek status, tanggal, harga, penanggung jawab, dan integrasi yang terkait.',
    '3. Perbarui informasi yang diperlukan, lalu pastikan perubahan tersimpan dan muncul di halaman terkait.',
    '4. Untuk pekerjaan tim, tetapkan penanggung jawab dan tenggat waktu dengan jelas.',
    '5. Untuk informasi yang akan dilihat tamu, cek kembali tanggal, nominal, instruksi, dan gaya bahasa sebelum dikirim.',
    '\n## Tips Operasional',
    '',
    `Gunakan panduan ini untuk ${focus}`,
    '',
    'Untuk pasar Indonesia dan Asia Tenggara, kecepatan respons, instruksi check-in yang jelas, kebersihan, dan koordinasi tim sangat memengaruhi pengalaman tamu. SympleHost membantu memisahkan pekerjaan ke reservasi, pesan, kalender, tugas, dan pengaturan tim agar tidak mudah terlewat.',
    '\n## Checklist Cepat',
    '',
    '- Tanggal reservasi, check-in, dan check-out sudah benar',
    '- Harga, mata uang, dan biaya tambahan sesuai',
    '- Informasi untuk tamu sudah terbaru',
    '- Penanggung jawab dan tenggat waktu sudah ditetapkan',
    '- Jika memakai OTA atau tool eksternal, status sinkronisasi sudah dicek',
    '\n## Langkah Berikutnya',
    '',
    'Setelah memperbarui pengaturan atau data operasional, cek Overview, Calendar, Inbox, dan Tasks untuk memastikan tidak ada pekerjaan yang terlewat. Bagikan perubahan penting kepada anggota tim yang terkait.',
  ].filter(Boolean).join('\n');
}
