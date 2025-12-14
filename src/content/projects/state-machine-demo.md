---
title: "XState 5 State Machine Demo"
description: "Interactive demonstration of finite state machines using XState 5 in a SvelteKit application"
pubDate: 2025-11-20
heroImage: "/images/projects/state-machine.jpg"
tags: ["state-management", "svelte", "xstate", "demo"]
stack: ["SvelteKit", "Svelte 5", "XState 5", "TypeScript", "TailwindCSS"]
demoUrl: "https://state-machine-demo.example.com"
repoUrl: "https://github.com/maxiim3/state-machine-demo"
---

## Project Overview

This interactive demo showcases the power of finite state machines for managing complex UI state in modern web applications. Built with SvelteKit and XState 5, it demonstrates how state machines can make application logic more predictable and maintainable.

## Why State Machines?

Traditional state management often leads to:

- Impossible states (loading and error at the same time)
- Unpredictable state transitions
- Scattered business logic
- Difficult-to-test code

State machines solve these problems by:

- **Defining all possible states explicitly**
- **Controlling transitions between states**
- **Making impossible states impossible**
- **Centralizing business logic**

## Demo Features

### Authentication Flow

The demo includes a complete authentication flow modeled as a state machine:

```typescript
const authMachine = createMachine({
  id: 'auth',
  initial: 'loggedOut',
  states: {
    loggedOut: {
      on: { LOGIN: 'loggingIn' }
    },
    loggingIn: {
      invoke: {
        src: 'loginUser',
        onDone: { target: 'loggedIn' },
        onError: { target: 'error' }
      }
    },
    loggedIn: {
      on: { LOGOUT: 'loggedOut' }
    },
    error: {
      on: { RETRY: 'loggingIn' }
    }
  }
});
```

### Shopping Cart

A shopping cart implementation showing:

- Adding/removing items
- Calculating totals
- Checkout process
- Payment states
- Success/error handling

### Form Wizard

Multi-step form with:

- Progressive disclosure
- Validation at each step
- Back navigation
- State persistence
- Conditional steps

## Technical Implementation

### Svelte 5 Integration

Using Svelte 5's new runes system for seamless reactivity:

```svelte
<script lang="ts">
  import { useMachine } from '@xstate/svelte';

  const { state, send } = $derived(useMachine(authMachine));

  $effect(() => {
    console.log('Current state:', state.value);
  });
</script>

<button onclick={() => send({ type: 'LOGIN' })}>
  {state.matches('loggingIn') ? 'Logging in...' : 'Login'}
</button>
```

### State Visualization

The demo includes a live state chart visualizer that shows:

- Current state highlighted
- Available transitions
- State history
- Event log
- State context

This visualization helps understand what's happening in real-time.

### Type Safety

Full TypeScript support with generated types:

```typescript
type AuthEvent =
  | { type: 'LOGIN'; credentials: Credentials }
  | { type: 'LOGOUT' }
  | { type: 'RETRY' };

type AuthContext = {
  user: User | null;
  error: string | null;
  attempts: number;
};
```

## Key Learnings

### 1. Explicit is Better

Making all states and transitions explicit up front forces you to think through all edge cases before writing implementation code.

### 2. Testability

State machines are incredibly easy to test - just verify that given a state and an event, you transition to the expected new state.

### 3. Documentation

The state machine definition itself serves as living documentation of your application's behavior.

### 4. Debugging

With a state machine, you always know what state your app is in and what events are valid. Debugging becomes much easier.

## Performance Considerations

State machines might seem like overhead, but they actually help performance:

- **Predictable rendering** - Components only re-render when state actually changes
- **Efficient updates** - State transitions are synchronous and deterministic
- **Memory efficient** - Only one state is active at a time
- **No race conditions** - State transitions are atomic

## Use Cases

State machines are perfect for:

- **Authentication flows** - Login, signup, password reset
- **Form wizards** - Multi-step forms with validation
- **Shopping carts** - Complex checkout processes
- **Video players** - Play, pause, buffering, error states
- **File uploads** - Idle, uploading, success, error, retry
- **API requests** - Loading, success, error, retry logic

## Accessibility Features

The demo prioritizes accessibility:

- Screen reader announcements for state changes
- Keyboard navigation through all states
- Focus management during transitions
- ARIA live regions for dynamic content
- High contrast mode support

## Code Examples

### Simple Traffic Light

```typescript
const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'red',
  states: {
    red: {
      after: { 4000: 'green' }
    },
    yellow: {
      after: { 2000: 'red' }
    },
    green: {
      after: { 6000: 'yellow' }
    }
  }
});
```

### Fetch with Retry

```typescript
const fetchMachine = createMachine({
  id: 'fetch',
  initial: 'idle',
  context: { retries: 0 },
  states: {
    idle: {
      on: { FETCH: 'loading' }
    },
    loading: {
      invoke: {
        src: 'fetchData',
        onDone: 'success',
        onError: {
          target: 'failure',
          actions: assign({
            retries: ({ context }) => context.retries + 1
          })
        }
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      on: {
        RETRY: {
          target: 'loading',
          guard: ({ context }) => context.retries < 3
        }
      }
    }
  }
});
```

## Resources

To learn more about state machines:

- [XState Documentation](https://stately.ai/docs/xstate)
- [State Machines in UI Development](https://statecharts.dev/)
- [Introduction to State Machines](https://www.youtube.com/watch?v=RqTxtOXcv8Y)

## Conclusion

State machines transform complex UI logic into declarative, testable, and maintainable code. This demo proves that the initial investment in modeling your states pays off with more reliable applications and better developer experience.

Try out the demo to see state machines in action, and consider adopting them in your next project!
