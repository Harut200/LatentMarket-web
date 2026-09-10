'use client';

import { SubmitEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

type IntakeFormProps = { kind: 'waitlist' | 'partnership' };

export function IntakeForm({ kind }: IntakeFormProps) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  );
  const [message, setMessage] = useState('');

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setMessage('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, kind }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || 'We could not submit your request.');
      setState('success');
      form.reset();
    } catch (error) {
      setState('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'We could not submit your request.',
      );
    }
  }

  if (state === 'success')
    return (
      <output className="form-success">
        <Check aria-hidden="true" />
        <span>
          <h3>Thank you. Your note is with us.</h3>
          <p>
            We will review the fit and follow up by email when there is a
            relevant next step.
          </p>
        </span>
      </output>
    );

  return (
    <form className="intake-form" onSubmit={submit}>
      <input
        className="honeypot"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="field-row">
        <label>
          Full name *
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Work email *
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="field-row">
        <label>
          Organization
          <input name="organization" type="text" autoComplete="organization" />
        </label>
        <label>
          Role
          <input name="role" type="text" autoComplete="organization-title" />
        </label>
      </div>
      {kind === 'partnership' ? (
        <>
          <label>
            Area of interest *
            <select name="interest" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>AI or ML system architecture</option>
              <option>Data platforms and pipelines</option>
              <option>Model development and training</option>
              <option>Deep learning and specialized AI</option>
              <option>Deployment, integration or MLOps</option>
              <option>Analytics and experimentation</option>
              <option>Scientific ML or applied R&amp;D</option>
              <option>End-to-end system delivery</option>
            </select>
          </label>
          <label>
            Project stage
            <select name="timeframe" defaultValue="">
              <option value="">Select if known</option>
              <option>Strategy or discovery</option>
              <option>Architecture or data foundation</option>
              <option>Prototyping</option>
              <option>Model development or training</option>
              <option>Production deployment</option>
              <option>Improving an operating system</option>
            </select>
          </label>
          <label>
            What would you like to explore? *
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Describe the objective, current system, available data and production outcome you need."
            />
          </label>
        </>
      ) : (
        <>
          <div className="field-row">
            <label>
              Applying as *
              <select name="profile_type" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>Company or institution</option>
                <option>Individual professional</option>
                <option>Academic researcher</option>
                <option>Family office or investment organization</option>
              </select>
            </label>
            <label>
              Potential purchasing timeframe *
              <select name="timeframe" required defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                <option>If available within 3 months</option>
                <option>If available within 3 to 6 months</option>
                <option>If available within 6 to 12 months</option>
                <option>Exploring with no fixed date</option>
              </select>
            </label>
          </div>
          <label>
            Intended use *
            <select name="interest" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Professional trading workflow</option>
              <option>Institutional market analysis</option>
              <option>Risk and portfolio decision support</option>
              <option>Product or infrastructure integration</option>
              <option>Research and validation</option>
              <option>Other professional use</option>
            </select>
          </label>
          <label>
            Tool category of interest *
            <select name="access_type" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Complex-market analysis tools</option>
              <option>Model-powered trading tools</option>
              <option>Data and market-intelligence tools</option>
              <option>Research and testing infrastructure</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Why should we consider your application? *
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Describe your background, intended use and why a future complex-market tool could be relevant to you."
            />
          </label>
          <label className="consent qualification-consent">
            <input type="checkbox" name="restrictions" value="yes" required />
            <span>
              I understand that no product is currently offered, release is not
              guaranteed, and any future offer will be paid, selective and may
              require confidentiality and use restrictions.
            </span>
          </label>
        </>
      )}
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree that LatentMarket Labs may use this information to respond to
          my enquiry, as described in the{' '}
          <Link href="/privacy">privacy policy</Link>.
        </span>
      </label>
      <div className="form-footer">
        <button
          className="button button-primary"
          type="submit"
          disabled={state === 'sending'}
        >
          {state === 'sending'
            ? 'Submitting…'
            : kind === 'partnership'
              ? 'Send partnership enquiry'
              : 'Join the future product waitlist'}{' '}
          <ArrowRight aria-hidden="true" size={17} />
        </button>
        <p>
          We do not sell contact data or add you to unrelated marketing lists.
        </p>
      </div>
      {state === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
