import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt =
  'LatentMarket Labs. We architect, build and deploy AI systems.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const INK = '#0b1720';
const PAPER = '#f2f0e9';
const MUTED = '#a3b2b8';
const SIGNAL = '#dca82a';

export default async function OpengraphImage() {
  const [serif, sans, mark] = await Promise.all([
    readFile(join(process.cwd(), 'assets/Newsreader-Regular.ttf')),
    readFile(join(process.cwd(), 'assets/InstrumentSans-Medium.ttf')),
    readFile(join(process.cwd(), 'public/logo-mark.png')),
  ]);
  const markSrc = `data:image/png;base64,${mark.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: INK,
          color: PAPER,
          padding: '58px 64px 54px',
          fontFamily: 'Instrument Sans',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 26,
            borderBottom: `1px solid rgba(237,240,239,0.2)`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: PAPER,
                padding: 7,
              }}
            >
              {/* eslint-disable-next-line next/no-img-element -- ImageResponse renders via satori, which has no next/image support */}
              <img src={markSrc} width={52} height={52} alt="" />
            </div>
            <div style={{ fontSize: 25, letterSpacing: '-0.01em' }}>
              LatentMarket Labs
            </div>
          </div>
          <div
            style={{
              fontSize: 17,
              letterSpacing: '0.16em',
              color: MUTED,
            }}
          >
            AI / MACHINE LEARNING / DATA SYSTEMS
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontFamily: 'Newsreader',
            fontSize: 86,
            lineHeight: 1.04,
            letterSpacing: '-0.03em',
            maxWidth: 940,
          }}
        >
          We architect, build and deploy AI systems.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 3, background: SIGNAL, width: 132 }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginTop: 24,
              fontSize: 21,
              color: MUTED,
            }}
          >
            <div style={{ display: 'flex', maxWidth: 640 }}>
              Private R&amp;D for cryptocurrency and complex-market trading
              tools.
            </div>
            <div style={{ display: 'flex', fontSize: 17, letterSpacing: '0.1em' }}>
              NO PRODUCT IS CURRENTLY FOR SALE
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Newsreader', data: serif, weight: 400, style: 'normal' },
        { name: 'Instrument Sans', data: sans, weight: 500, style: 'normal' },
      ],
    },
  );
}
