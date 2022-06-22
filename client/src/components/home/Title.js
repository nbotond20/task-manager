import React, { useEffect } from 'react';
import './css/Title.css';

function setTextAnimation(
    delay,
    duration,
    strokeWidth,
    timingFunction,
    strokeColor,
    repeat
) {
    let paths = Array.from(document.querySelectorAll('path')).filter(
        (path) => path.id
    );
    let mode = repeat ? 'infinite' : 'forwards';
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style['stroke-dashoffset'] = `${length}px`;
        path.style['stroke-dasharray'] = `${length}px`;
        path.style['stroke-width'] = `${strokeWidth}px`;
        path.style['stroke'] = `${strokeColor}`;
        path.style[
            'animation'
        ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style['animation-delay'] = `${i * delay}s`;
    }
}

function Icon() {
    useEffect(() => {
        setTextAnimation(0.1, 7, 1, 'linear', '#dedfe0', false);
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="905.1"
            height="97.2"
            viewBox="0 0 905.1 97.2"
        >
            <g
                id="svgGroup"
                fill="none"
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="0.945"
                fontSize="12"
            >
                <path
                    id="0"
                    d="M9 74H0V4h13.3l19.4 44.3L51.8 4h13.6v70h-9.5V16.1L37.2 58.2h-9.4L9 16.1V74z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="1"
                    d="M118 26.2V22h8.2v39.4a12.15 12.15 0 00.102 1.636q.332 2.434 1.748 3.314 1.85 1.15 4.05 1.15l-1.9 7a17.722 17.722 0 01-4.265-.472q-5.637-1.4-7.232-6.948a13.59 13.59 0 01-.103-.38 21.307 21.307 0 01-3.11 3.426 28.498 28.498 0 01-3.14 2.424q-3.95 2.65-10.05 2.65-6.5 0-11.8-3.3a22.947 22.947 0 01-7.413-7.527 27.923 27.923 0 01-1.037-1.823 27.228 27.228 0 01-2.63-7.942 36.644 36.644 0 01-.52-6.308 33.142 33.142 0 01.997-8.269A27.968 27.968 0 0182.05 34.3q3.15-6.2 8.7-9.85a22.297 22.297 0 0111.195-3.606 27.388 27.388 0 011.555-.044 22.584 22.584 0 014.794.49 18.703 18.703 0 013.356 1.06 26.002 26.002 0 014.287 2.294A22.103 22.103 0 01118 26.2zm-.8 34.5V32.8q-2.7-1.9-5.95-3.05t-6.85-1.15a15.924 15.924 0 00-4.971.754 14.024 14.024 0 00-3.479 1.696 16.301 16.301 0 00-5.019 5.424 19.962 19.962 0 00-.731 1.376 20.663 20.663 0 00-1.753 5.677A27.678 27.678 0 0088.1 48q0 5.6 2.1 9.95a17.602 17.602 0 003.106 4.546A15.697 15.697 0 0096 64.75q3.7 2.45 8.3 2.45 3.8 0 7.2-1.85 3.4-1.85 5.7-4.65z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="2"
                    d="M153.1 74h-9V22h8.7v8.7q2.8-4.2 7.15-7.05a17.316 17.316 0 017.106-2.625 22.629 22.629 0 013.244-.225 23.225 23.225 0 015.065.518q5.094 1.138 8.085 4.782 4.125 5.026 4.338 13.109a33.764 33.764 0 01.012.891V74h-9V41.1a19.265 19.265 0 00-.342-3.741q-.439-2.214-1.439-3.962a10.966 10.966 0 00-.869-1.297 8.579 8.579 0 00-6.277-3.353 12.061 12.061 0 00-1.073-.047 13.122 13.122 0 00-6.849 1.964 17.353 17.353 0 00-1.851 1.286q-4.1 3.25-7 7.65V74z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="3"
                    d="M238.9 26.2V22h8.2v39.4a12.15 12.15 0 00.102 1.636q.332 2.434 1.748 3.314 1.85 1.15 4.05 1.15l-1.9 7a17.722 17.722 0 01-4.265-.472q-5.637-1.4-7.232-6.948a13.59 13.59 0 01-.103-.38 21.307 21.307 0 01-3.11 3.426 28.498 28.498 0 01-3.14 2.424q-3.95 2.65-10.05 2.65-6.5 0-11.8-3.3a22.947 22.947 0 01-7.413-7.527 27.923 27.923 0 01-1.037-1.823 27.228 27.228 0 01-2.63-7.942 36.644 36.644 0 01-.52-6.308 33.142 33.142 0 01.997-8.269 27.968 27.968 0 012.153-5.731q3.15-6.2 8.7-9.85a22.297 22.297 0 0111.195-3.606 27.388 27.388 0 011.555-.044 22.584 22.584 0 014.794.49 18.703 18.703 0 013.356 1.06 26.002 26.002 0 014.287 2.294A22.103 22.103 0 01238.9 26.2zm-.8 34.5V32.8q-2.7-1.9-5.95-3.05t-6.85-1.15a15.924 15.924 0 00-4.971.754 14.024 14.024 0 00-3.479 1.696 16.301 16.301 0 00-5.019 5.424 19.962 19.962 0 00-.731 1.376 20.663 20.663 0 00-1.753 5.677A27.678 27.678 0 00209 48q0 5.6 2.1 9.95a17.602 17.602 0 003.106 4.546 15.697 15.697 0 002.694 2.254q3.7 2.45 8.3 2.45 3.8 0 7.2-1.85 3.4-1.85 5.7-4.65z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="4"
                    d="M266.4 92.8l3.3-7.8a20.562 20.562 0 003.817 2.373 24.737 24.737 0 001.783.777q2.759 1.078 6.559 1.226a31.788 31.788 0 001.241.024 21.701 21.701 0 004.521-.443q2.901-.618 5.101-2.098a12.576 12.576 0 001.528-1.209 11.352 11.352 0 002.907-4.493q1.143-3.101 1.143-7.457v-6.4q-2 2.4-5.75 4.55T283.6 74q-5.9 0-11.2-3.05a22.236 22.236 0 01-7.292-6.838A27.437 27.437 0 01263.8 62a25.181 25.181 0 01-2.713-7.624 35.033 35.033 0 01-.587-6.576 32.06 32.06 0 01.917-7.808 26.682 26.682 0 012.333-6.092 25.706 25.706 0 016.064-7.622A24.448 24.448 0 01272.5 24.3q5.5-3.5 12.1-3.5a22.366 22.366 0 014.82.501 18.715 18.715 0 013.18.999 25.705 25.705 0 013.828 1.968A20.998 20.998 0 01298.8 26v-4h8.2v50.8q0 8.6-3 14t-8.35 7.9a25.811 25.811 0 01-6.604 2.021 35.243 35.243 0 01-5.946.479q-4.6 0-8.95-1.1a27.232 27.232 0 01-5.3-1.917 23.518 23.518 0 01-2.45-1.383zM298 60V32.8q-2.166-1.575-5.203-2.859a36.018 36.018 0 00-.097-.041 16.249 16.249 0 00-3.804-1.051 22.135 22.135 0 00-3.396-.249q-4.1 0-7.7 2.2-3.6 2.2-5.85 6.35-2.25 4.15-2.25 10.15a24.32 24.32 0 00.478 4.936 18.311 18.311 0 001.772 4.964 18.576 18.576 0 002.911 4.075A15.802 15.802 0 00277.8 63.7q3.6 2.3 7.8 2.3a15.276 15.276 0 004.578-.668A13.606 13.606 0 00292.8 64.2a20.855 20.855 0 002.981-2.016A16.309 16.309 0 00298 60z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="5"
                    d="M364.6 51.7h-36.4a24.088 24.088 0 001.139 5.025q1.336 3.813 3.961 6.375 4.2 4.1 11.1 4.1 4.5 0 8.1-.95 3.6-.95 6.9-2.45l2.1 7.7a40.77 40.77 0 01-4.335 1.626 51.863 51.863 0 01-3.765 1.024 38.914 38.914 0 01-5.092.819 52.025 52.025 0 01-5.008.231 28.318 28.318 0 01-7.746-1.005 21.108 21.108 0 01-10.004-6.145 23.521 23.521 0 01-5.205-9.54Q319 53.845 319 48a35.359 35.359 0 01.833-7.822 28.84 28.84 0 012.117-6.128 24.642 24.642 0 015.016-7.082 22.887 22.887 0 013.234-2.618 21.048 21.048 0 0110.259-3.472 26.205 26.205 0 012.041-.078q7.5 0 12.45 3.25 4.95 3.25 7.45 8.75a28.185 28.185 0 012.426 9.864 33.434 33.434 0 01.074 2.236 75.204 75.204 0 01-.291 6.697 69.426 69.426 0 01-.009.103zm-36.5-7.3h28.5a24.355 24.355 0 00-.404-4.585q-.496-2.584-1.6-4.608A12.422 12.422 0 00352.8 32.7a12.488 12.488 0 00-6.961-3.776 18.395 18.395 0 00-3.539-.324 13.58 13.58 0 00-5.112.935 12.524 12.524 0 00-4.488 3.115q-3.8 4.05-4.6 11.75z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="7"
                    d="M399.4 95.2l2-7.5a9.908 9.908 0 001.165.574q.823.345 1.835.626a13.514 13.514 0 002.279.417 17.358 17.358 0 001.721.083q4.2 0 7.5-2.7a12.003 12.003 0 001.933-2.061q1.748-2.311 3.408-6.164a58.58 58.58 0 00.959-2.375l2.3-6h-4.8l-20.3-45.7 8-3.6 19.4 43.3 15.1-42.9 8.3 3.2-19.1 52.2a71.728 71.728 0 01-2.053 5.086q-1.102 2.44-2.269 4.428A30.86 30.86 0 01424.8 89.1a24.268 24.268 0 01-2.878 3.211q-1.914 1.768-4.017 2.807a14.737 14.737 0 01-.605.282q-4.1 1.8-9.1 1.8-3 0-5.25-.6t-3.55-1.4z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="8"
                    d="M465.8 71.75a24.559 24.559 0 004.598 2.09q4.055 1.36 8.702 1.36 7.4 0 13.25-3.4t9.25-9.55a26.255 26.255 0 002.653-7.141A34.184 34.184 0 00505 47.8a34.542 34.542 0 00-.485-5.909 25.795 25.795 0 00-2.965-8.441q-3.45-6.05-9.3-9.35a24.848 24.848 0 00-4.641-2.027A27.738 27.738 0 00479.1 20.8a31.325 31.325 0 00-1.58.039A26.169 26.169 0 00465.9 24.1q-5.9 3.3-9.3 9.4a26.023 26.023 0 00-2.749 7.59A35.006 35.006 0 00453.2 48a34.82 34.82 0 00.265 4.354 27.451 27.451 0 003.085 9.796q3.35 6.15 9.25 9.6zm13.3-4.55q7.9 0 12.3-5.35a18.802 18.802 0 003.819-8.09A27.105 27.105 0 00495.8 48q0-5.2-2.2-9.55a19.198 19.198 0 00-4.172-5.569 18.17 18.17 0 00-1.778-1.431q-3.75-2.65-8.55-2.65a19.249 19.249 0 00-5.226.672A14.037 14.037 0 00466.8 34a17.878 17.878 0 00-3.674 7.374q-.726 2.932-.726 6.426 0 5.2 2.2 9.65a19.437 19.437 0 003.53 5.04 17.627 17.627 0 002.42 2.06q3.75 2.65 8.55 2.65z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="9"
                    d="M516.5 55.8V22h9v32.6a22.981 22.981 0 00.254 3.534q.288 1.847.903 3.335a10.136 10.136 0 001.443 2.481 8.404 8.404 0 005.113 3.021 12.807 12.807 0 002.487.229q4.1 0 7.95-1.65 3.85-1.65 6.85-4.45V22h9v38.5a15.602 15.602 0 00.102 1.854q.332 2.762 1.748 3.796 1.85 1.35 4.05 1.35l-1.9 7q-9.3 0-11.5-7.4-3.5 3.6-8.1 5.85-4.6 2.25-9.9 2.25-4.5 0-8.5-1.9a14.441 14.441 0 01-5.51-4.639 18.266 18.266 0 01-.99-1.511 16.24 16.24 0 01-1.664-4.093q-.836-3.152-.836-7.257z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="10"
                    d="M586.4 74h-9V22h8.7v11.3q1.3-3.3 3.5-6.15 2.2-2.85 5.5-4.6a14.817 14.817 0 014.68-1.524 19.459 19.459 0 013.02-.226q1.5 0 3 .15a18.972 18.972 0 011.055.134q.5.078.927.178a8.817 8.817 0 01.518.138l-2.7 9.3a9.763 9.763 0 00-2.145-.612q-1.096-.188-2.355-.188a12.958 12.958 0 00-6.63 1.846 15.609 15.609 0 00-.42.254q-3.328 2.086-5.472 6.442a22.927 22.927 0 00-.028.058q-1.763 3.607-2.08 8.828a39.09 39.09 0 00-.07 2.372V74z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="12"
                    d="M649.3 56.1V31.7h-9v-7.8h9.2l1.9-16.4h6.9v16.4h14.4v7.8h-14.4v25.1a21.559 21.559 0 00.168 2.796q.473 3.606 2.282 5.304 2.45 2.3 5.85 2.3 2.5 0 4.75-.8t4.15-1.9l2.5 7.2a18.546 18.546 0 01-1.618.856q-.802.379-1.748.752a43.365 43.365 0 01-2.034.742q-3.4 1.15-7.1 1.15-7.5 0-11.85-4.95a16.116 16.116 0 01-3.228-5.902q-.763-2.431-1.007-5.368a34.777 34.777 0 01-.115-2.88z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="13"
                    d="M720.6 26.2V22h8.2v39.4a12.15 12.15 0 00.102 1.636q.332 2.434 1.748 3.314 1.85 1.15 4.05 1.15l-1.9 7a17.722 17.722 0 01-4.265-.472q-5.637-1.4-7.232-6.948a13.59 13.59 0 01-.103-.38 21.307 21.307 0 01-3.11 3.426 28.498 28.498 0 01-3.14 2.424Q711 75.2 704.9 75.2q-6.5 0-11.8-3.3a22.947 22.947 0 01-7.413-7.527 27.923 27.923 0 01-1.037-1.823 27.228 27.228 0 01-2.63-7.942 36.644 36.644 0 01-.52-6.308 33.142 33.142 0 01.997-8.269 27.968 27.968 0 012.153-5.731q3.15-6.2 8.7-9.85a22.297 22.297 0 0111.195-3.606 27.388 27.388 0 011.555-.044 22.584 22.584 0 014.794.49 18.703 18.703 0 013.356 1.06 26.002 26.002 0 014.287 2.294A22.103 22.103 0 01720.6 26.2zm-.8 34.5V32.8q-2.7-1.9-5.95-3.05T707 28.6a15.924 15.924 0 00-4.971.754 14.024 14.024 0 00-3.479 1.696 16.301 16.301 0 00-5.019 5.424 19.962 19.962 0 00-.731 1.376 20.663 20.663 0 00-1.753 5.677A27.678 27.678 0 00690.7 48q0 5.6 2.1 9.95a17.602 17.602 0 003.106 4.546 15.697 15.697 0 002.694 2.254q3.7 2.45 8.3 2.45 3.8 0 7.2-1.85 3.4-1.85 5.7-4.65z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="14"
                    d="M742.2 69.8l3.8-7.5a18.557 18.557 0 003.144 2.126q1.554.844 3.406 1.524a24.073 24.073 0 007.611 1.437 27.464 27.464 0 00.839.013q5.392 0 8.235-1.715a7.738 7.738 0 00.215-.135q2.85-1.85 2.85-4.75a7.123 7.123 0 00-.314-2.147 6.212 6.212 0 00-.736-1.553 6.384 6.384 0 00-.929-1.094q-1.014-.972-2.687-1.925a22.3 22.3 0 00-.234-.131 28.462 28.462 0 00-1.994-.993q-2.116-.962-5.105-2.011a103.602 103.602 0 00-1.001-.346 46.616 46.616 0 01-4.398-1.743q-2.114-.974-3.79-2.062a19.335 19.335 0 01-2.762-2.145 11.324 11.324 0 01-3.294-5.996 16.794 16.794 0 01-.356-3.554q0-6 5.25-10.15 4.404-3.481 11.658-4.042a37.527 37.527 0 012.892-.108 40.794 40.794 0 014.446.231q2.308.253 4.324.784a25.234 25.234 0 01.13.035q3.9 1.05 7 2.65l-2.5 7.4q-2.7-1.6-6.15-2.6a25.024 25.024 0 00-4.483-.847 31.837 31.837 0 00-3.167-.153 20.632 20.632 0 00-2.937.195q-3.086.445-4.963 1.905a9.322 9.322 0 00-1.358 1.273q-.702.819-1.037 1.692A4.529 4.529 0 00753.5 35a4.921 4.921 0 001.495 3.552 7.082 7.082 0 00.605.548 9.88 9.88 0 001.3.869q2.273 1.302 6.698 2.765a84.459 84.459 0 00.202.066 67.753 67.753 0 015.062 1.898q5.927 2.519 8.738 5.402 3.9 4 3.9 10 0 6.748-5.251 10.755a16.618 16.618 0 01-.399.295q-4.74 3.397-12.188 3.945a40.423 40.423 0 01-2.962.105q-5.9 0-10.65-1.5a30.883 30.883 0 01-3.84-1.485q-1.981-.931-3.562-2.079a18.229 18.229 0 01-.448-.336z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="15"
                    d="M835.6 69l-6.2 6-26.9-27.7V74h-9V0h9v42.3L826 21l5.2 5.7-20.1 17.8L835.6 69z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="16"
                    d="M840.1 69.8l3.8-7.5a18.557 18.557 0 003.144 2.126q1.554.844 3.406 1.524a24.073 24.073 0 007.611 1.437 27.464 27.464 0 00.839.013q5.392 0 8.235-1.715a7.738 7.738 0 00.215-.135q2.85-1.85 2.85-4.75a7.123 7.123 0 00-.314-2.147 6.212 6.212 0 00-.736-1.553 6.384 6.384 0 00-.929-1.094q-1.014-.972-2.687-1.925a22.3 22.3 0 00-.234-.131 28.462 28.462 0 00-1.994-.993q-2.116-.962-5.105-2.011a103.602 103.602 0 00-1.001-.346 46.616 46.616 0 01-4.398-1.743q-2.114-.974-3.79-2.062a19.335 19.335 0 01-2.762-2.145 11.324 11.324 0 01-3.294-5.996 16.794 16.794 0 01-.356-3.554q0-6 5.25-10.15 4.404-3.481 11.658-4.042a37.527 37.527 0 012.892-.108 40.794 40.794 0 014.446.231q2.308.253 4.324.784a25.234 25.234 0 01.13.035q3.9 1.05 7 2.65l-2.5 7.4q-2.7-1.6-6.15-2.6a25.024 25.024 0 00-4.483-.847A31.837 31.837 0 00862 28.3a20.632 20.632 0 00-2.937.195q-3.086.445-4.963 1.905a9.322 9.322 0 00-1.358 1.273q-.702.819-1.037 1.692A4.529 4.529 0 00851.4 35a4.921 4.921 0 001.495 3.552 7.082 7.082 0 00.605.548 9.88 9.88 0 001.3.869q2.273 1.302 6.698 2.765a84.459 84.459 0 00.202.066 67.753 67.753 0 015.062 1.898q5.927 2.519 8.738 5.402 3.9 4 3.9 10 0 6.748-5.251 10.755a16.618 16.618 0 01-.399.295q-4.74 3.397-12.188 3.945a40.423 40.423 0 01-2.962.105q-5.9 0-10.65-1.5a30.883 30.883 0 01-3.84-1.485q-1.981-.931-3.562-2.079a18.229 18.229 0 01-.448-.336z"
                    vectorEffect="non-scaling-stroke"
                ></path>
                <path
                    id="17"
                    d="M893.763 73.262A6.418 6.418 0 00898.4 75.2a8.605 8.605 0 00.622-.022 6.461 6.461 0 004.178-1.828q1.9-1.85 1.9-4.85a6.225 6.225 0 00-.579-2.671 6.955 6.955 0 00-1.471-2.029 8.478 8.478 0 00-.521-.469A6.325 6.325 0 00898.4 61.8a8.813 8.813 0 00-1.853.185A5.979 5.979 0 00893.5 63.6a5.927 5.927 0 00-1.568 2.84 8.624 8.624 0 00-.232 2.06q0 2.7 2 4.7a8.317 8.317 0 00.063.062z"
                    vectorEffect="non-scaling-stroke"
                ></path>
            </g>
        </svg>
    );
}
export default Icon;