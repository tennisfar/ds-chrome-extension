(() => {
  var e = [];
  chrome.runtime.onInstalled.addListener(function (n) {
    n === chrome.runtime.OnInstalledReason.INSTALL && chrome.storage.sync.set({ favorites: e });
  }),
    chrome.runtime.onMessage.addListener(function (e, n, t) {
      'callMyFunction' === e.action && t({ result: 'Function executed' });
    });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiTUFBQSxJQXNCSUEsRUFBWSxHQUVoQkMsT0FBT0MsUUFBUUMsWUFBWUMsYUFBWSxTQUFDQyxHQUNsQ0EsSUFBV0osT0FBT0MsUUFBUUksa0JBQWtCQyxTQUM5Q04sT0FBT08sUUFBUUMsS0FBS0MsSUFBSSxDQUFFVixVQUFBQSxHQUk5QixJQUVBQyxPQUFPQyxRQUFRUyxVQUFVUCxhQUFZLFNBQVVRLEVBQVNDLEVBQVFDLEdBQ3ZDLG1CQUFuQkYsRUFBUUcsUUFDVkQsRUFBYSxDQUFFRSxPQUFRLHFCQUUzQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHMtY2hyb21lLWV4dGVuc2lvbi8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNob3dCdXR0b25zID0ge1xuICBzaG93U2l0ZWNvcmVDb21wb25lbnRzOiB0cnVlLFxuICBvcGVuSW5TaXRlY29yZTogdHJ1ZSxcbiAgb3Blbk15SmlyYTogdHJ1ZSxcbiAgb3BlbkluRXhwZXJpZW5jZUVkaXRvcjogdHJ1ZSxcbiAgb3BlbkppcmFCb2FyZERsaTogdHJ1ZSxcbiAgb3BlbkppcmFCb2FyZERsbzogdHJ1ZSxcbiAgb3BlbkppcmFCb2FyZEZPUjogdHJ1ZSxcbiAgbWFrZUppcmFEbGk6IHRydWUsXG4gIG1ha2VKaXJhRGxvOiB0cnVlLFxuICBtYWtlSmlyYUZPUjogdHJ1ZSxcbiAgbWFrZUppcmE6IHRydWUsXG4gIG9wZW5TaXRlY29yZVByb2REbGk6IHRydWUsXG4gIG9wZW5TaXRlY29yZVByb2REbG86IHRydWUsXG4gIG9wZW5TaXRlY29yZVRvd24yMURsaTogdHJ1ZSxcbiAgb3BlblNpdGVjb3JlVG93bjIxRGxvOiB0cnVlLFxuICBvcGVuU2l0ZWNvcmVEZXY6IHRydWUsXG4gIG9wZW5TaXRlY29yZVRydW5rOiB0cnVlLFxufTtcblxuLy8gbGV0IHNob3dTZXR0aW5ncyA9IGZhbHNlO1xuXG5sZXQgZmF2b3JpdGVzID0gW107XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKChyZWFzb24pID0+IHtcbiAgaWYgKHJlYXNvbiA9PT0gY2hyb21lLnJ1bnRpbWUuT25JbnN0YWxsZWRSZWFzb24uSU5TVEFMTCkge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgZmF2b3JpdGVzIH0pO1xuICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgc2hvd0J1dHRvbnMgfSk7XG4gICAgLy8gY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBzaG93U2V0dGluZ3MgfSk7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ2NhbGxNeUZ1bmN0aW9uJykge1xuICAgIHNlbmRSZXNwb25zZSh7IHJlc3VsdDogJ0Z1bmN0aW9uIGV4ZWN1dGVkJyB9KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmF2b3JpdGVzIiwiY2hyb21lIiwicnVudGltZSIsIm9uSW5zdGFsbGVkIiwiYWRkTGlzdGVuZXIiLCJyZWFzb24iLCJPbkluc3RhbGxlZFJlYXNvbiIsIklOU1RBTEwiLCJzdG9yYWdlIiwic3luYyIsInNldCIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJhY3Rpb24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9
