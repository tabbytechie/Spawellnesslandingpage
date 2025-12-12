import { Flower2 } from 'lucide-react';

// Loading Overlay Component (appears inside the same page)
export function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 px-4">
        {/* New CSS-based Spinner Loader */}
        <div className="loader"></div>
        
        {/* Loading text with animated dots */}
        <div className="flex items-center gap-1">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Loading</p>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 animate-fade-in text-center max-w-xs">
          Preparing your wellness experience...
        </p>
      </div>
    </div>
  );
}

// Full Screen Loading Component (previous implementation)
export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col items-center gap-6 px-4">
        {/* New CSS-based Spinner Loader */}
        <div className="loader"></div>
        
        {/* Loading text with animated dots */}
        <div className="flex items-center gap-1">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">Loading</p>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-emerald-700 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 animate-fade-in text-center max-w-xs">
          Preparing your wellness experience...
        </p>
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="min-h-screen pt-20 px-4 bg-stone-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <div className="h-6 sm:h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg w-32 sm:w-48 mx-auto animate-shimmer bg-[length:200%_100%]"></div>
          <div className="h-10 sm:h-12 md:h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto animate-shimmer bg-[length:200%_100%]" style={{ animationDelay: '100ms' }}></div>
          <div className="h-5 sm:h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg w-full max-w-sm sm:max-w-xl md:max-w-2xl mx-auto animate-shimmer bg-[length:200%_100%]" style={{ animationDelay: '200ms' }}></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 space-y-4 overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl animate-shimmer bg-[length:200%_100%]"></div>
              <div className="space-y-3">
                <div className="h-5 sm:h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-3/4 animate-shimmer bg-[length:200%_100%]"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-full animate-shimmer bg-[length:200%_100%]"></div>
                <div className="h-3 sm:h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-2/3 animate-shimmer bg-[length:200%_100%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InlineLoader() {
  return (
    <div className="flex items-center justify-center py-8 sm:py-12">
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        {/* New CSS-based Small Spinner Loader */}
        <div className="loader-small"></div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;