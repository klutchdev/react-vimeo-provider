import * as React from 'react';
import { useEffect, useRef } from 'react';
import Player, { CallbackFunction, EventCallback, Options } from '@vimeo/player';

export function ReactVimeoProvider({
  ref,
  title,
  videoId,
  allowFullScreen,
  height,
  width,
  onPlay,
  onProgress,
  onEnded,
  onError,
  onGetTitle,
  options,
  ...props
}: {
  ref?: any;
  title: string;
  videoId: string | number;
  allowFullScreen?: boolean;
  height?: string | number;
  width?: string | number;
  onPlay?: EventCallback | any;
  onProgress?: CallbackFunction | any;
  onEnded?: CallbackFunction | any;
  onError?: CallbackFunction | any;
  onGetTitle?: CallbackFunction | any;
  options?: Options;
  props?: any;
}) {
  const vimeoRef = useRef(null);
  const id = videoId.toString();

  useEffect(() => {
    const player = new Player(id, options);

    player.on('play', onPlay);
    player.on('ended', onEnded);
    player.on('error', onError);
    player.on('progress', onProgress);
    player.getPlayed();
    player.getVideoTitle().then(onGetTitle);

    return () => {
      player.destroy();
    };
  }, [videoId]);

  return (
    <iframe
      id={id}
      key={id}
      title={title}
      ref={ref || vimeoRef}
      width={width || '1080px'}
      height={height || '720px'}
      allowFullScreen={allowFullScreen || true}
      src={`https://player.vimeo.com/video/${videoId}`}
      {...props}
    />
  );
}

// function notifyMe() {
//   let notification;

//   if (!('Notification' in window)) {
//     notification = alert('Notifications not supported');
//   }
//   if (Notification.permission !== 'denied') {
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         notification = new Notification('Success', {
//           body: 'You successfully completed a module!',
//           icon: logo,
//         });
//       }
//     });
//   }
//   return notification;
// }
