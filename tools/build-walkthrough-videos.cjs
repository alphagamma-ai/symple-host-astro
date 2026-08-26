const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const workRoot = path.join(root, 'tmp', 'walkthrough-videos');
const videoRoot = path.join(root, 'public', 'videos');
const posterRoot = path.join(root, 'public', 'screenshots', 'videos');
const logo = path.join(root, 'public', 'screenshots', 'videos', 'symplehost-wordmark.png');

const ffmpeg = '/opt/homebrew/bin/ffmpeg';
const rsvg = '/opt/homebrew/bin/rsvg-convert';

fs.mkdirSync(workRoot, { recursive: true });
fs.mkdirSync(videoRoot, { recursive: true });
fs.mkdirSync(posterRoot, { recursive: true });

const walkthroughs = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    subtitle: 'Set up the essentials in the right order',
    output: 'symplehost-walkthrough-getting-started.mp4',
    poster: 'walkthrough-getting-started.png',
    slides: [
      ['Step 1', 'Create your host account', 'public/screenshots/creating-your-account/signup-form.png', 'Sign up, verify your details, and complete the basic profile.'],
      ['Step 2', 'Set up your workspace', 'public/screenshots/setting-up-company-profile/workspace-branding.png', 'Add company details, workspace branding, and the settings your team will use.'],
      ['Step 3', 'Import Airbnb first', 'public/uploads/import-listings-from-ota/01-new-property-options.png', 'Most hosts should bring Airbnb into SympleHost first, then add other OTAs later.'],
      ['Step 4', 'Connect payments in Settings', 'public/uploads/set-up-payments-stripe/01.png', 'Open Settings and connect your payment provider before taking direct bookings.'],
      ['Step 5', 'Check the daily command centre', 'public/screenshots/welcome-to-symplehost/overview-dashboard.png', 'Review bookings, messages, tasks, reviews, and reservations from the overview.']
    ]
  },
  {
    slug: 'calendar',
    title: 'Calendar',
    subtitle: 'Manage availability, blocks, prices, and quick booking actions',
    output: 'symplehost-walkthrough-calendar.mp4',
    poster: 'walkthrough-calendar.png',
    slides: [
      ['Step 1', 'Open Calendar', 'public/screenshots/manage-bookings-and-calendar/calendar-overview-current.png', 'Use the calendar to scan availability, bookings, blocked dates, and operational pressure.'],
      ['Step 2', 'Review listing timelines', 'public/uploads/manage-bookings-and-calendar/02-calendar-overview.png', 'Move across dates and properties to see where stays, gaps, and conflicts sit.'],
      ['Step 3', 'Open booking details', 'public/uploads/manage-bookings-and-calendar/03-booking-detail-popup.png', 'Click a booking to check guest, stay, channel, and status details.'],
      ['Step 4', 'Start a reservation from Calendar', 'public/screenshots/adding-direct-bookings/calendar-start-new-reservation.png', 'Create a new direct or manual reservation from the date context.']
    ]
  },
  {
    slug: 'messages',
    title: 'Messages',
    subtitle: 'Reply to guests with context across connected channels',
    output: 'symplehost-walkthrough-messages.mp4',
    poster: 'walkthrough-messages.png',
    slides: [
      ['Step 1', 'Open Messages', 'public/screenshots/inbox-communicate-with-guests/messages-list-tabs.png', 'Use tabs, filters, and channel context to find conversations that need attention.'],
      ['Step 2', 'Connect messaging channels', 'public/screenshots/connecting-messaging-integrations/integrations-page-overview.png', 'Connect supported channels such as WhatsApp, Instagram, Messenger, LINE, and Gmail.'],
      ['Step 3', 'Use planned automations', 'public/screenshots/operations-owner-portal/operations-automations.png', 'Scheduled messages handle repeatable SOPs such as check-in reminders and follow-ups.'],
      ['Step 4', 'Use Concierge for live questions', 'public/screenshots/inbox-communicate-with-guests/messages-list-tabs.png', 'Concierge helps answer guest questions using property context, past chats, and taught knowledge.']
    ]
  },
  {
    slug: 'operations',
    title: 'Operations',
    subtitle: 'Track cleaning, maintenance, templates, expenses, and approvals',
    output: 'symplehost-walkthrough-operations.mp4',
    poster: 'walkthrough-operations.png',
    slides: [
      ['Step 1', 'Open Operations', 'public/screenshots/operations-owner-portal/operations-command-center.png', 'Use the command centre to see active work, overdue tasks, and what needs follow-up.'],
      ['Step 2', 'Create a task', 'public/screenshots/operations-owner-portal/create-new-task-modal.png', 'Add property, assignee, due date, notes, priority, and checklist details.'],
      ['Step 3', 'Reuse templates', 'public/screenshots/operations-owner-portal/job-templates.png', 'Create task templates and turnover checklists for repeatable cleaning or maintenance work.'],
      ['Step 4', 'Track expenses and approvals', 'public/screenshots/operations-owner-portal/operations-expenses.png', 'Record operational costs and route owner approvals where needed.'],
      ['Step 5', 'Review operations reports', 'public/screenshots/operations-owner-portal/operations-reports.png', 'Use reports to understand completed work, costs, and operational patterns.']
    ]
  },
  {
    slug: 'payments-and-deposits',
    title: 'Payments and Deposits',
    subtitle: 'Connect payment tools and manage guest payment flow',
    output: 'symplehost-walkthrough-payments-and-deposits.mp4',
    poster: 'walkthrough-payments-and-deposits.png',
    slides: [
      ['Step 1', 'Open Settings from your profile', 'public/screenshots/navigating-symplehost/profile-menu-entry.png', 'Payment configuration lives in Settings, opened from the top-right profile menu.'],
      ['Step 2', 'Open Payment Gateway', 'public/uploads/set-up-payments-stripe/01.png', 'Use the payment gateway settings to connect the provider available for your account.'],
      ['Step 3', 'Connect Stripe when available', 'public/uploads/set-up-payments-stripe/02.png', 'Stripe setup may require login, account details, and permission approval.'],
      ['Step 4', 'Confirm reservation payment state', 'public/screenshots/viewing-your-first-reservation/reservation-details.png', 'Confirm bookings after payment is received so downstream workflows can run correctly.']
    ]
  },
  {
    slug: 'reservations',
    title: 'Reservations',
    subtitle: 'Check booking details, payment state, source, and status',
    output: 'symplehost-walkthrough-reservations.mp4',
    poster: 'walkthrough-reservations.png',
    slides: [
      ['Step 1', 'Open Reservations', 'public/screenshots/viewing-your-first-reservation/reservations-list.png', 'Use Reservations when you need the full booking record rather than a calendar view.'],
      ['Step 2', 'Open a booking', 'public/screenshots/viewing-your-first-reservation/reservation-details.png', 'Check guest details, property, stay dates, source, status, and payment information.'],
      ['Step 3', 'Create manual reservations', 'public/screenshots/creating-a-reservation-manually/calendar-new-reservation-entry.png', 'Add a manual reservation when the booking starts outside an OTA connection.'],
      ['Step 4', 'Confirm paid bookings', 'public/uploads/manage-bookings-and-calendar/04-reservation-details.png', 'Confirm bookings after payment so guest messages and operational workflows can trust the stay.']
    ]
  },
  {
    slug: 'services',
    title: 'Services',
    subtitle: 'Create bookable services, tours, schedules, and workforce coverage',
    output: 'symplehost-walkthrough-services.mp4',
    poster: 'walkthrough-services.png',
    slides: [
      ['Step 1', 'Open Services', 'public/screenshots/creating-and-managing-services/my-services-page.png', 'Use Services for tours, transfers, add-ons, guest upsells, and operational services.'],
      ['Step 2', 'Configure service details', 'public/screenshots/creating-and-managing-services/service-workforce.png', 'Set service type, pricing, schedule, provider, and booking options.'],
      ['Step 3', 'Add workforce coverage', 'public/screenshots/creating-and-managing-services/add-workforce-member.png', 'Assign providers or team members so the service can be delivered reliably.'],
      ['Step 4', 'Connect services to quotes', 'public/screenshots/how-to-create-and-manage-quotations/service-quote-wizard.png', 'Add services to quotes when guests request extras before or during a stay.']
    ]
  },
  {
    slug: 'websites',
    title: 'Websites',
    subtitle: 'Build direct booking pages, checkout links, and widgets',
    output: 'symplehost-walkthrough-websites.mp4',
    poster: 'walkthrough-websites.png',
    slides: [
      ['Step 1', 'Open Websites', 'public/screenshots/websites/website-dashboard.png', 'Manage direct booking websites and public booking pages from the Websites module.'],
      ['Step 2', 'Check launch requirements', 'public/screenshots/websites/website-publish-requirements.png', 'Before publishing, confirm required setup such as listings, content, payments, and domain details.'],
      ['Step 3', 'Choose offerings', 'public/screenshots/websites/website-detail-offerings.png', 'Control which properties, services, and booking options appear on the website.'],
      ['Step 4', 'Preview public booking', 'public/screenshots/websites/public-booking-page.png', 'Review the public booking experience before sharing links with guests.']
    ]
  },
  {
    slug: 'owner-portal',
    title: 'Owner Portal',
    subtitle: 'Give owners visibility into performance, reservations, and approvals',
    output: 'symplehost-walkthrough-owner-portal.mp4',
    poster: 'walkthrough-owner-portal.png',
    slides: [
      ['Step 1', 'Set managed property details', 'public/screenshots/owner-portal-managed-properties/managed-property-settings.png', 'Add owner and management-fee settings for properties you manage on behalf of others.'],
      ['Step 2', 'Show owner performance', 'public/screenshots/owner-portal-managed-properties/owner-portal-overview.png', 'Owners can review property performance and stay informed without manual reports.'],
      ['Step 3', 'Share bookings visibility', 'public/screenshots/operations-owner-portal/owner-portal-bookings.png', 'Owners can see upcoming reservations and guest activity for their property.'],
      ['Step 4', 'Route approvals', 'public/screenshots/owner-portal-managed-properties/owner-statements-approvals.png', 'Use statements and approvals to make expense communication clearer.']
    ]
  },
  {
    slug: 'direct-bookings-and-quotes',
    title: 'Direct Bookings and Quotes',
    subtitle: 'Create direct reservations and send property or service quotes',
    output: 'symplehost-walkthrough-direct-bookings-and-quotes.mp4',
    poster: 'walkthrough-direct-bookings-and-quotes.png',
    slides: [
      ['Step 1', 'Start a direct booking', 'public/screenshots/adding-direct-bookings/calendar-start-new-reservation.png', 'Create a booking directly when the guest comes from your own channel.'],
      ['Step 2', 'Create a property quote', 'public/screenshots/how-to-create-and-manage-quotations/property-quote-wizard.png', 'Build a quote with dates, listing, guest details, pricing, and fees.'],
      ['Step 3', 'Create a service quote', 'public/screenshots/how-to-create-and-manage-quotations/service-quote-wizard.png', 'Quote tours, transfers, and other services alongside accommodation.'],
      ['Step 4', 'Review quote actions', 'public/screenshots/how-to-create-and-manage-quotations/quote-detail-actions.png', 'Send, manage, and convert quotes once the guest is ready to proceed.']
    ]
  }
];

function run(cmd, args, options = {}) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', cwd: root, ...options });
  if (result.status !== 0) {
    throw new Error(`${cmd} failed with exit code ${result.status}`);
  }
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function mimeFor(file) {
  const ext = path.extname(file).toLowerCase();
  if (ext === '.svg') return 'image/svg+xml';
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  return 'image/png';
}

function imageDataUri(file) {
  const absolute = path.isAbsolute(file) ? file : path.join(root, file);
  const data = fs.readFileSync(absolute).toString('base64');
  return `data:${mimeFor(absolute)};base64,${data}`;
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function svgText({ text, x, y, size, weight = 500, color = '#344054', maxChars = 62, lineHeight = 1.24 }) {
  const tspans = wrapText(text, maxChars).map((line, index) => {
    const dy = index === 0 ? 0 : size * lineHeight;
    return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`;
  }).join('');
  return `<text x="${x}" y="${y}" fill="${color}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}">${tspans}</text>`;
}

function makeSlide({ walkthrough, slide, index, imageUri, logoUri }) {
  const [eyebrow, heading, , caption] = slide;
  const isFirst = index === 0;
  const screenshotX = 88;
  const screenshotY = 276;
  const screenshotW = 1744;
  const screenshotH = 654;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <rect width="1920" height="1080" fill="#fbf8ff"/>
  <rect x="54" y="42" width="1812" height="996" rx="34" fill="#ffffff" stroke="#eadcff" stroke-width="2"/>
  <image href="${logoUri}" x="90" y="76" width="58" height="58" preserveAspectRatio="xMinYMid meet"/>
  ${svgText({ text: 'SympleHost', x: 164, y: 116, size: 34, weight: 800, color: '#26113f', maxChars: 24 })}
  ${svgText({ text: walkthrough.title, x: 90, y: 186, size: 64, weight: 800, color: '#26113f', maxChars: 34 })}
  ${svgText({ text: walkthrough.subtitle, x: 92, y: 238, size: 30, weight: 600, color: '#667085', maxChars: 78 })}
  <rect x="1492" y="82" width="288" height="62" rx="31" fill="#f2e8ff" stroke="#dec8ff"/>
  ${svgText({ text: eyebrow, x: 1542, y: 123, size: 26, weight: 800, color: '#8f39ff', maxChars: 20 })}
  <rect x="${screenshotX}" y="${screenshotY}" width="${screenshotW}" height="${screenshotH}" rx="26" fill="#f6f1ff" stroke="#eadcff" stroke-width="2"/>
  <clipPath id="clip"><rect x="${screenshotX + 24}" y="${screenshotY + 24}" width="${screenshotW - 48}" height="${screenshotH - 48}" rx="18"/></clipPath>
  <image href="${imageUri}" x="${screenshotX + 24}" y="${screenshotY + 24}" width="${screenshotW - 48}" height="${screenshotH - 48}" preserveAspectRatio="xMidYMid meet" clip-path="url(#clip)"/>
  ${isFirst ? '<rect x="88" y="276" width="1744" height="654" rx="26" fill="none" stroke="#8f39ff" stroke-width="8" opacity="0.22"/>' : ''}
  <rect x="90" y="952" width="1740" height="70" rx="24" fill="#26113f"/>
  ${svgText({ text: heading, x: 126, y: 997, size: 32, weight: 800, color: '#ffffff', maxChars: 48 })}
  ${svgText({ text: caption, x: 658, y: 997, size: 26, weight: 600, color: '#ede7f6', maxChars: 68 })}
</svg>`;
}

function createVideo(walkthrough) {
  const dir = path.join(workRoot, walkthrough.slug);
  fs.mkdirSync(dir, { recursive: true });

  const logoUri = imageDataUri(logo);
  const segments = [];

  walkthrough.slides.forEach((slide, index) => {
    const [, , image] = slide;
    const imagePath = path.join(root, image);
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Missing screenshot for ${walkthrough.slug}: ${image}`);
    }

    const svg = makeSlide({
      walkthrough,
      slide,
      index,
      imageUri: imageDataUri(imagePath),
      logoUri
    });

    const basename = String(index).padStart(2, '0');
    const svgFile = path.join(dir, `slide-${basename}.svg`);
    const pngFile = path.join(dir, `slide-${basename}.png`);
    const segmentFile = path.join(dir, `segment-${basename}.mp4`);

    fs.writeFileSync(svgFile, svg);
    run(rsvg, ['-w', '1920', '-h', '1080', '-f', 'png', '-o', pngFile, svgFile]);

    if (index === 0) {
      fs.copyFileSync(pngFile, path.join(posterRoot, walkthrough.poster));
    }

    segments.push(segmentFile);
    run(ffmpeg, [
      '-y',
      '-loop', '1',
      '-i', pngFile,
      '-t', index === 0 ? '7' : '8',
      '-vf', 'format=yuv420p',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-r', '30',
      segmentFile
    ]);
  });

  const concatFile = path.join(dir, 'segments.txt');
  fs.writeFileSync(concatFile, segments.map((file) => `file '${file.replace(/'/g, "'\\''")}'`).join('\n'));

  const output = path.join(videoRoot, walkthrough.output);
  run(ffmpeg, [
    '-y',
    '-f', 'concat',
    '-safe', '0',
    '-i', concatFile,
    '-an',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    output
  ]);

  console.log(`Created ${path.relative(root, output)}`);
}

walkthroughs.forEach(createVideo);
