import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const mark = await readFile(join(process.cwd(), 'public/logo-mark-512.png'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f2f0e9',
        }}
      >
        {/* eslint-disable-next-line next/no-img-element -- ImageResponse renders via satori, which has no next/image support */}
        <img
          src={`data:image/png;base64,${mark.toString('base64')}`}
          width={166}
          height={166}
          alt=""
        />
      </div>
    ),
    size,
  );
}
